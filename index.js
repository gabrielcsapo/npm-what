var exec = require('child_process').exec;
var cmd = './node_modules/.bin/cloc /Users/gabrielcsapo/Documents/node-notebook --exclude-dir=node_modules';

exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    console.log(stdout.split('\n'));
});
