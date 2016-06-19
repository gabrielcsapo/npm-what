var fs = require('fs');
var path = require('path');
var depcheck = require('depcheck');
var exec = require('child_process').exec;
var cloc = require('cloc/package.json'); // eslint-disable-line no-unused-vars
var logger = require('winston');
var ProgressBar = require('progress');

module.exports = function(directory, callback) {
    var cmd = './node_modules/.bin/cloc ' + directory + ' --exclude-dir=node_modules';
    // yeah I stole this from `./node_modules/.bin/cloc --show-lang`
    var supported_languages = ["BAP", "ActionScript", "Ada", "ADSO/IDSM", "AMPLE", "Ant", "Apex Trigger", "Arduino Sketch", "ASP", "ASP.Net", "AspectJ", "Assembly", "AutoHotkey", "awk", "Bourne Again Shell", "Bourne Shell", "C", "C Shell", "C#", "C++", "C/C++ Header", "CCS", "Clojure", "ClojureC", "ClojureScript", "CMake", "COBOL", "CoffeeScript", "ColdFusion", "ColdFusion CFScript", "Coq", "Crystal", "CSON", "CSS", "CUDA", "Cython", "D", "DAL", "Dart", "diff", "DITA", "DOORS Extension Language", "DOS Batch", "DTD", "dtrace", "ECPP", "EEx", "Elixir", "Elm", "ERB", "Erlang", "Expect", "F#", "Focus", "Forth", "Fortran 77", "Fortran 90", "Fortran 95", "GDScript", "Go", "Grails", "Groovy", "Haml", "Handlebars", "Harbour", "Haskell", "HLSL", "HTML", "IDL", "InstallShield", "Java", "JavaScript", "JavaServer Faces", "JCL", "JSON", "JSP", "Julia", "Kermit", "Korn Shell", "Kotlin", "LESS", "lex", "Lisp", "LiveLink OScript", "Lua", "m4", "make", "MATLAB", "Maven", "Modula3", "MSBuild script", "MUMPS", "Mustache", "MXML", "NAnt script", "NASTRAN DMAP", "Nemerle", "Objective C", "Objective C++", "OCaml", "OpenCL", "Oracle Forms", "Oracle Reports", "Pascal", "Pascal/Puppet", "Patran Command Language", "Perl", "PHP", "PHP/Pascal", "Pig Latin", "PL/I", "PowerBuilder", "PowerShell", "Prolog", "Protocol Buffers", "PureScript", "Python", "QML", "Qt", "Qt Project", "R", "Racket", "Razor", "Rexx", "RobotFramework", "Ruby", "Ruby HTML", "Rust", "SAS", "SASS", "Scala", "sed", "SKILL", "SKILL++", "Smarty", "Softbridge Basic", "SQL", "SQL Data", "SQL Stored Procedure", "Standard ML", "Stylus", "Swift", "Tcl/Tk", "Teamcenter met", "Teamcenter mth", "Titanium Style Sheet", "Twig", "TypeScript", "Unity-Prefab", "Vala", "Vala Header", "Velocity Template Language", "Verilog-SystemVerilog", "VHDL", "vim script", "Visual Basic", "Visual Fox Pro", "Visualforce Component", "Visualforce Page", "Windows Message File", "Windows Module Definition", "Windows Resource File", "WiX include", "WiX source", "WiX string localization", "XAML", "xBase", "xBase Header", "XHTML", "XMI", "XML", "XQuery", "XSD", "XSLT", "yacc", "YAML", "zsh"];
    // we will use this eventually
    var output = {
        total_code: "",
        stats: "",
        languages: [],
        package: {},
        modules_raw: [], // this is a list of all depdencies explicitly defined
        modules_stats: {}, // this is the depcheck response
        modules: {} // this is where the real stuff goes
    };
    var parseSum = function(out) {
        var lc = [];
        var done = false;
        var line = out.split('');
        line.reverse();
        line.forEach(function(c) {
            if (c !== ' ') {
                if (!done) {
                    lc.push(c);
                }
            } else {
                return done = true;
            }
        });
        return lc.reverse().join('');
    };

    exec(cmd, function(error, stdout) {
        // Lets get the total amount of code this project uses
        stdout.split('\n').forEach(function(out) {
            if (out.indexOf('files/s') > -1) {
                return output.stats = out.substring(out.indexOf('T='), out.length); // parse the ugly stats line
            }
            if (supported_languages.some(function(v) {
                    return out.indexOf(v) >= 0;
                })) {
                // hey this is a language line, lets store this for later
                output.languages.push(out);
            }
            // yep this my substitute from using grep or awk so 🖕
            if (out.indexOf('SUM') > -1) {
                output.total_code = parseSum(out);
            }
        });

        var _package = JSON.parse(fs.readFileSync(path.resolve(directory, 'package.json')));
        output.package = _package;
        output.modules_raw = Object.keys(_package.dependencies ? _package.dependencies : {}) || [];
        output.modules_raw = output.modules_raw.concat(Object.keys(_package.devDependencies ? _package.devDependencies : {}) || []);
        var step = output.modules_raw.length;
        var bar = new ProgressBar('parsing [:bar]', {
            total: step
        });
        var finish = function() {
            if (step == 0) {
                for (var mod in output.modules) {
                    output.modules[mod].verdict = "❓";
                    if (output.modules[mod].total_code) {
                        if (output.modules[mod].ocurrences == 0) {
                            output.modules[mod].verdict = "🖕";
                        } else {
                            if (output.modules[mod].total_code < 100) {
                                output.modules[mod].verdict = "🙄";
                            } else if (output.modules[mod].total_code / output.modules[mod].ocurrences < 500) {
                                output.modules[mod].verdict = "🔨";
                            } else {
                                output.modules[mod].verdict = "👏";
                            }
                        }
                    }
                }
                callback(output);
            } else {
                bar.tick();
                step -= 1;
            }
        }
        finish(); // short the call stack if we have zero dependencies, by the default it would be 0...
        depcheck(directory, {}, function(unused) {
            for (var key in unused.invalidFiles) {
                logger.error('\n' + key + ' : ' + unused.invalidFiles[key].toString());
            }
            output.modules_stats = unused.using;
            output.modules_raw.forEach(function(mod) {
                output.modules[mod] = {
                    dir: path.resolve(directory, 'node_modules', mod),
                    ocurrences: output.modules_stats[mod] ? output.modules_stats[mod].length : 0
                };
                // lets see how many lines of code this module is
                var cmdm = 'echo "module:' + mod + '";./node_modules/.bin/cloc ' + output.modules[mod].dir + ' --exclude-dir=node_modules';
                exec(cmdm, function(error, stdout) {
                    var current_mod = '';
                    stdout.split('\n').forEach(function(out) {
                        if (out.indexOf('module:') > -1) {
                            current_mod = out.replace('module:', '');
                        }
                        if (out.indexOf('SUM') > -1) {
                            output.modules[current_mod].total_code = parseSum(out);
                        }
                    });
                    finish();
                });
            });
        });
    });
}
