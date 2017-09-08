# npm-what

> are you really using node modules properly?

[![Npm Version](https://img.shields.io/npm/v/npm-what.svg)](https://www.npmjs.com/package/npm-what)
[![Dependency Status](https://david-dm.org/gabrielcsapo/npm-what.svg)](https://david-dm.org/gabrielcsapo/npm-what)
[![devDependency Status](https://david-dm.org/gabrielcsapo/npm-what/dev-status.svg)](https://david-dm.org/gabrielcsapo/npm-what#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/npm-what.svg)]()
[![npm](https://img.shields.io/npm/dm/npm-what.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/gabrielcsapo/npm-what/badge.svg?branch=master)](https://coveralls.io/github/gabrielcsapo/npm-what?branch=master)

## What is this?

pretty simple it finds the amount of code that your project consists of, then it finds the amount of code used by all of your dependencies and gives you a grade based on how well you are using that dependency

## Installation

`npm install npm-what -g`

## Usage

```
Usage: npm-what [options]

Options:

  -h, --help              output usage information
  -V, --version           output the version number
  -d, --directory [path]  determine the name of the directory you want to look at
```

## Key

| Emoji    |  Explanation | What should you do |
|----------|:-------------:|------:|
| 🖕 |  you aren't even referencing this module | install this globally not explicitly in the project |
| 🙄 |    this is less than a hundred lines of code  | grab the parts you need, ditch the package |
| 🔨 | needs some work, but referenced enough times to mandate use | you should contribute to this project |
| 👏 | congratulations 👍| Cool you use modules... |

## Output

> this is an example using npm 3.9.3 as a test

`npm-what -d /npm`

```
info: So lets see how you did...
info: your project is 43130 lines of code
info: your project has 80 modules
info: this is how you did...
```
| Module                           | LOC   | Ocurrences | Verdict |
| -------------------------------- | ----- | ---------- | ------- |
| abbrev@~1.0.7                    | 131   | 1          | 🔨      |
| ansicolors@~0.3.2                | 159   | 3          | 🔨      |
| ansistyles@~0.1.3                | 82    | 1          | 🙄      |
| aproba@~1.0.3                    | 227   | 25         | 🔨      |
| archy@~1.0.0                     | 285   | 2          | 🔨      |
| chownr@~1.0.1                    | 99    | 6          | 🙄      |
| cmd-shim@~2.0.2                  | 411   | 1          | 🔨      |
| columnify@~1.5.4                 | 655   | 1          | 👏      |
| config-chain@~1.1.10             | 532   | 1          | 👏      |
| dezalgo@~1.0.3                   | 103   | 5          | 🔨      |
| editor@~1.0.0                    | 86    | 2          | 🙄      |
| fs-vacuum@~1.2.9                 | 839   | 1          | 👏      |
| fs-write-stream-atomic@~1.0.8    | 390   | 5          | 🔨      |
| fstream@~1.0.8                   | 1753  | 1          | 👏      |
| fstream-npm@~1.1.0               | 544   | 1          | 👏      |
| glob@~7.0.3                      | 1153  | 4          | 🔨      |
| graceful-fs@~4.1.4               | 629   | 139        | 🔨      |
| has-unicode@~2.0.0               | 116   | 1          | 🔨      |
| hosted-git-info@~2.1.5           | 330   | 2          | 🔨      |
| iferr@~0.1.5                     | 137   | 14         | 🔨      |
| inflight@~1.0.5                  | 150   | 9          | 🔨      |
| inherits@~2.0.1                  | 76    | 4          | 🙄      |
| ini@~1.3.4                       | 199   | 4          | 🔨      |
| init-package-json@~1.9.4         | 855   | 1          | 👏      |
| lockfile@~1.0.1                  | 658   | 1          | 👏      |
| lodash._baseuniq@~4.6.0          | 422   | 0          | 🖕      |
| lodash.clonedeep@~4.3.2          | 112   | 2          | 🔨      |
| lodash.union@~4.4.0              | 148   | 3          | 🔨      |
| lodash.uniq@~4.3.0               | 114   | 1          | 🔨      |
| lodash.without@~4.2.0            | 148   | 3          | 🔨      |
| mkdirp@~0.5.1                    | 549   | 199        | 🔨      |
| node-gyp@~3.3.1                  | 21910 | 0          | 🖕      |
| nopt@~3.0.6                      | 746   | 4          | 🔨      |
| normalize-git-url@~3.0.2         | 200   | 2          | 🔨      |
| normalize-package-data@~2.3.5    | 1657  | 2          | 👏      |
| npm-cache-filename@~1.0.2        | 95    | 4          | 🙄      |
| npm-install-checks@~3.0.0        | 389   | 2          | 🔨      |
| npm-package-arg@~4.1.1           | 711   | 16         | 🔨      |
| npm-registry-client@~7.1.0       | 5289  | 1          | 👏      |
| npm-user-validate@~0.1.2         | 166   | 1          | 🔨      |
| npmlog@~2.0.3                    | 685   | 65         | 🔨      |
| once@~1.3.3                      | 116   | 6          | 🔨      |
| opener@~1.4.1                    | 92    | 4          | 🙄      |
| osenv@~0.1.3                     | 228   | 121        | 🔨      |
| path-is-inside@~1.0.1            | 62    | 4          | 🙄      |
| read@~1.0.7                      | 135   | 1          | 🔨      |
| read-cmd-shim@~1.0.1             | 224   | 2          | 🔨      |
| read-installed@~4.0.3            | 747   | 3          | 🔨      |
| read-package-json@~2.0.4         | 592   | 20         | 🔨      |
| read-package-tree@~5.1.4         | 498   | 6          | 🔨      |
| readable-stream@~2.1.3           | 7214  | 2          | 👏      |
| realize-package-specifier@~3.0.3 | 691   | 5          | 🔨      |
| request@~2.72.0                  | 2380  | 0          | 🖕      |
| retry@~0.9.0                     | 530   | 1          | 👏      |
| rimraf@~2.5.2                    | 400   | 206        | 🔨      |
| semver@~5.1.0                    | 2067  | 18         | 🔨      |
| sha@~2.0.1                       | 153   | 4          | 🔨      |
| slide@~1.1.6                     | 174   | 34         | 🔨      |
| sorted-object@~2.0.0             | 97    | 1          | 🙄      |
| strip-ansi@~3.0.1                | 130   | 0          | 🖕      |
| tar@~2.2.1                       | 4333  | 4          | 👏      |
| text-table@~0.2.0                | 297   | 1          | 🔨      |
| uid-number@0.0.6                 | 111   | 3          | 🔨      |
| umask@~1.1.0                     | 241   | 1          | 🔨      |
| unique-filename@~1.1.0           | 103   | 3          | 🔨      |
| unpipe@~1.0.0                    | 75    | 1          | 🙄      |
| validate-npm-package-name@~2.2.2 | 212   | 1          | 🔨      |
| which@~1.2.9                     | 220   | 7          | 🔨      |
| wrappy@~1.0.1                    | 101   | 0          | 🖕      |
| write-file-atomic@~1.1.4         | 234   | 10         | 🔨      |
| deep-equal@~1.0.1                | 311   | 1          | 🔨      |
| marked@~0.3.5                    | 1095  | 0          | 🖕      |
| marked-man@~0.1.5                | 500   | 0          | 🖕      |
| npm-registry-couchapp@~2.6.12    | 21697 | 0          | 🖕      |
| npm-registry-mock@~1.0.1         | 566   | 81         | 🔨      |
| require-inject@~1.3.1            | 196   | 28         | 🔨      |
| sprintf-js@~1.0.3                | 433   | 1          | 🔨      |
| standard@~6.0.8                  | 358   | 1          | 🔨      |
| tacks@~1.2.1                     | 544   | 22         | 🔨      |
| tap@~5.7.1                       | 2278  | 252        | 🔨      |
