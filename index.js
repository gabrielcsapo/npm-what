var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var directory = process.env.DIRECTORY || process.cwd();
console.log(directory);
var cmd = './node_modules/.bin/cloc ' + directory + ' --exclude-dir=node_modules';
console.log(cmd);
// yeah I stole this from `./node_modules/.bin/cloc --show-lang`
var supported_languages = ["BAP","ActionScript","Ada","ADSO/IDSM","AMPLE","Ant","Apex Trigger","Arduino Sketch","ASP","ASP.Net","AspectJ","Assembly","AutoHotkey","awk","Bourne Again Shell","Bourne Shell","C","C Shell","C#","C++","C/C++ Header","CCS","Clojure","ClojureC","ClojureScript","CMake","COBOL","CoffeeScript","ColdFusion","ColdFusion CFScript","Coq","Crystal","CSON","CSS","CUDA","Cython","D","DAL","Dart","diff","DITA","DOORS Extension Language","DOS Batch","DTD","dtrace","ECPP","EEx","Elixir","Elm","ERB","Erlang","Expect","F#","Focus","Forth","Fortran 77","Fortran 90","Fortran 95","GDScript","Go","Grails","Groovy","Haml","Handlebars","Harbour","Haskell","HLSL","HTML","IDL","InstallShield","Java","JavaScript","JavaServer Faces","JCL","JSON","JSP","Julia","Kermit","Korn Shell","Kotlin","LESS","lex","Lisp","LiveLink OScript","Lua","m4","make","MATLAB","Maven","Modula3","MSBuild script","MUMPS","Mustache","MXML","NAnt script","NASTRAN DMAP","Nemerle","Objective C","Objective C++","OCaml","OpenCL","Oracle Forms","Oracle Reports","Pascal","Pascal/Puppet","Patran Command Language","Perl","PHP","PHP/Pascal","Pig Latin","PL/I","PowerBuilder","PowerShell","Prolog","Protocol Buffers","PureScript","Python","QML","Qt","Qt Project","R","Racket","Razor","Rexx","RobotFramework","Ruby","Ruby HTML","Rust","SAS","SASS","Scala","sed","SKILL","SKILL++","Smarty","Softbridge Basic","SQL","SQL Data","SQL Stored Procedure","Standard ML","Stylus","Swift","Tcl/Tk","Teamcenter met","Teamcenter mth","Titanium Style Sheet","Twig","TypeScript","Unity-Prefab","Vala","Vala Header","Velocity Template Language","Verilog-SystemVerilog","VHDL","vim script","Visual Basic","Visual Fox Pro","Visualforce Component","Visualforce Page","Windows Message File","Windows Module Definition","Windows Resource File","WiX include","WiX source","WiX string localization","XAML","xBase","xBase Header","XHTML","XMI","XML","XQuery","XSD","XSLT","yacc","YAML","zsh"];
// we will use this eventually
var output = {
    total_code: "",
    stats: "",
    languages: [],
    modules: []
};
exec(cmd, function(error, stdout, stderr) {
    // Lets get the total amount of code this project uses
    stdout.split('\n').forEach(function(out) {
        if(out.indexOf('files/s') > -1) {
            return output.stats = out;
        }
        if (supported_languages.some(function(v) { return out.indexOf(v) >= 0; })) {
            // hey this is a language line, lets store this for later
            output.languages.push(out);
        }
        if(out.indexOf('SUM') > -1) {
            var lc = [];
            var done = false;
            var line = out.split('');
            line.reverse();
            line.forEach(function(c) {
                if(c !== ' ') {
                    if(!done) {
                        lc.push(c);
                    }
                } else {
                    return done = true;
                }
            });
            output.total_code = lc.reverse().join('');
        }
    });
    var package = JSON.parse(fs.readFileSync(path.resolve(directory, 'package.json')));
    output.modules = Object.keys(package.dependencies);
    console.log(output);
});
