#!/usr/bin/env node

/* eslint-disable no-console */

const ora = require('ora');
const Table = require('markdown-table');
const path = require('path');

const npmWhat = require('../index');

const args = process.argv.slice(2);

process.on('unhandledRejection', (e) => console.log(e));

let program = {};

args.forEach((arg, i) => {
  switch (arg) {
    case '-v':
    case '--version':
    case 'version':
      console.log(`v${require('../package.json').version}`); // eslint-disable-line
      process.exit(0);
    break;
    case '-h':
    case '--help':
    case 'help':
      console.log(`` + // eslint-disable-line
        `
Usage: npm-what [options]

Commands:
  -h, --help, help             Output usage information
  -v, --version, version       Output the version number

Options:
  -d, --directory [path]       The path of the project you want to check (default directory is process.cwd())
`);
      process.exit(0);
    break;
    case '-d':
    case '--directory':
      program['directory'] = path.resolve(process.cwd(), args[i + 1]);
    break;
  }
});

const { directory=process.cwd() } = program;

const spinner = ora('Parsing project').start();

(async function() {
  try {
    let table = [['Module', 'LOC', 'Ocurrences', 'Verdict']];
    const output = await npmWhat(directory);

    spinner.succeed(`Parsed ${Object.keys(output.modules).length} modules \n`);

    for (const mod in output.modules) {
        const version = output.package.dependencies[mod] || output.package.devDependencies[mod];

        table.push([
          `${mod.toString()}@${version || '?'}`,
          output.modules[mod].total_code ? output.modules[mod].total_code.toString() : '0',
          output.modules[mod].ocurrences.toString(),
          output.modules[mod].verdict
        ]);
    }

    console.log('> Project');
    console.log(`${Table([
      ['LOC', 'Modules Required'],
      [output.total_code, Object.keys(output.modules).length]
    ])}\n`);
    console.log('> Modules Required');
    console.log(`${Table(table)}\n`);
    console.log('> if you see modules that are not in your package.json running `npm update` should resolve your project tree\n');
  } catch(ex) {
    let error = ex.toString();

    switch(error) {
      case `Error: Cannot find module '${directory}/package.json'`:
        spinner.fail('This is not a npm project. Could not find package.json');
      break;
      default:
        spinner.fail(`Something went wrong \n ${ex.toString()}`);
    }
  }
}());
