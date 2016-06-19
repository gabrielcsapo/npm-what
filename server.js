var express = require('express');
var app = express();
var path = require('path');
var spawn = require('child_process').spawnSync;
var simpleGit = require('simple-git');
var npmWhat = require('./index.js');
var db = require('node-flat-db')('server.json', {
    storage: require('node-flat-db/file-sync')
});
var swig = require('swig');
var _ = require('underscore');

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', {});
});

var get = function(git_repo, callback) {
    if (!db(git_repo).value()) {
        simpleGit(path.resolve(__dirname, 'temp')).clone(git_repo, encodeURIComponent(git_repo), function() {
            var dir = path.resolve(__dirname, 'temp', encodeURIComponent(git_repo));
            spawn('npm', ['install'], {
                cwd: dir
            });
            npmWhat(dir, function(output) {
                db(git_repo).push(output);
                callback(output);
            });
        });
    } else {
        callback(db(git_repo).value()[0]);
    }
}

app.get('/*/json', function(req, res) {
    var git_repo = req.originalUrl.substring(1, req.originalUrl.length - 5);
    get(git_repo, function(output) {
        res.send(output);
    });
});

app.get('/*.svg', function(req, res) {
    var git_repo = req.originalUrl.substring(1, req.originalUrl.length - 4);
    get(git_repo, function(output) {
        var raw = _.pluck(output.modules, 'verdict').reduce(function(acc, curr) {
            if (typeof acc[curr] == 'undefined') {
                acc[curr] = 1;
            } else {
                acc[curr] += 1;
            }
            return acc;
        }, {});
        var verdict = "";
        for (var r in raw) {
            verdict += r + ' : ' + raw[r] + ' ';
        }
        var params = {
            left: 'npm-what',
            right: verdict,
            color: 'rgb(115, 175, 255)'
        };
        var badge = swig.renderFile(path.join(__dirname, 'badge.svg'), params);
        res.writeHead(200, {"Content-Type": "image/svg+xml"})
        res.write(badge);
    });
});

app.listen(1337, function() {
    console.log('npm-what server listening on http://localhost:1337'); // eslint-disable-line no-console
});
