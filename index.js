const path = require('path');
const depcheck = require('depcheck');
const { promisify } = require('util');
const child_process = require('child_process');

const exec = promisify(child_process.exec);

module.exports = async function npmWhat(directory) {
  const cloc = path.resolve(__dirname, 'node_modules', '.bin', 'cloc');
  const cmd = `${cloc} ${directory} --exclude-dir=node_modules`;

  let output = {
    total_code: '',
    languages: [],
    package: require(path.resolve(directory, 'package.json')),
    modules_raw: [], // this is a list of all depdencies explicitly defined
    modules_stats: {}, // this is the depcheck response
    modules: {} // this is where the real stuff goes
  };

  const { stdout, stderr } = await exec(cmd);

  if(stderr) {
    throw new Error(stderr);
  }

  // Lets get the total amount of code this project uses
  stdout.split('\n').forEach((out) => {
    // yep this my substitute from using grep or awk
    if (out.indexOf('SUM') > -1) {
      output.total_code = out.split(' ').filter((l) => l !== '' && l !== 'SUM:').reduce((a, b) => parseInt(a) + parseInt(b));
    }
  });

  output.modules_raw = Object.keys(output.package.dependencies ? output.package.dependencies : {}).concat(Object.keys(output.package.devDependencies ? output.package.devDependencies : {}) || []);

  if(output.modules_raw.length === 0) {
    throw new Error('no modules could be parsed');
  }

  const unused = await depcheck(directory, {});

  if (Object.keys(unused.invalidFiles).length > 0) {
    throw new Error(`invalidFiles scanned ${unused.invalidFiles}`);
  }

  output.modules_stats = unused.using;
  for(var i = 0; i < output.modules_raw.length; i++) {
    let current_mod = '';
    const mod = output.modules_raw[i];

    output.modules[mod] = {
      dir: `${directory}/node_modules/${mod}`,
      ocurrences: output.modules_stats[mod] ? output.modules_stats[mod].length : 0
    };

    // lets see how many lines of code this module is
    const { stdout } = await exec(`echo "module:${mod}";${cloc} ${output.modules[mod].dir} --exclude-dir=node_modules`);

    stdout.split('\n').forEach((out) => {
      if (out.indexOf('module:') > -1) {
        current_mod = out.split(':')[1];
      }
      if (out.indexOf('SUM') > -1) {
        output.modules[current_mod].total_code = out.split(' ').filter((l) => l !== '' && l !== 'SUM:').reduce((a, b) => parseInt(a) + parseInt(b));
      }
    });
  }

  for (var mod in output.modules) {
    const { total_code, ocurrences } = output.modules[mod];

    output.modules[mod].verdict = '❓';

    if (ocurrences == 0) output.modules[mod].verdict = '🖕';
    if (total_code < 100) output.modules[mod].verdict = '🙄';
    if (total_code / ocurrences < 500) output.modules[mod].verdict = '🔨';
    if (total_code / ocurrences > 500) output.modules[mod].verdict = '👏';
  }

  return output;
};
