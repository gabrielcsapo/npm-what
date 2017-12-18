# npm-what

> 🔍 are you really using node modules properly?

[![Npm Version](https://img.shields.io/npm/v/npm-what.svg)](https://www.npmjs.com/package/npm-what)
[![Coverage Status](https://lcov-server.gabrielcsapo.com/badge/github%2Ecom/gabrielcsapo/npm-what.svg)](https://lcov-server.gabrielcsapo.com/coverage/github%2Ecom/gabrielcsapo/npm-what)
[![Dependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/npm-what/status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/npm-what)
[![devDependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/npm-what/dev-status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/npm-what#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/npm-what.svg)]()
[![npm](https://img.shields.io/npm/dm/npm-what.svg)]()

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Installation](#installation)
- [Usage](#usage)
	- [Key](#key)
	- [Example](#example)
- [TLDR;](#tldr)

<!-- /TOC -->

## Installation

```bash
npm install npm-what -g
```

## Usage

```
Usage: npm-what [options]

Commands:
  -h, --help, help             Output usage information
  -v, --version, version       Output the version number

Options:
  -d, --directory [path]       The path of the project you want to check (default directory is process.cwd())
```

### Key

| Emoji    |  Explanation | What should you do |
|----------|:-------------:|------:|
| 🖕 |  you aren't even referencing this module | install this globally not explicitly in the project |
| 🙄 |    this is less than a hundred lines of code  | grab the parts you need, ditch the package |
| 🔨 | needs some work, but referenced enough times to mandate use | you should contribute to this project |
| 👏 | congratulations 👍| Cool you use modules... |

### Example

> npm-what running against itself

```
$ npm-what

✔ Parsed 7 modules

> Project
| LOC  | Modules Required |
| ---- | ---------------- |
| 6879 | 7                |

> Modules Required
| Module                | LOC   | Ocurrences | Verdict |
| --------------------- | ----- | ---------- | ------- |
| cloc@^2.3.2           | 12621 | 0          | 👏      |
| depcheck@^0.6.8       | 2295  | 1          | 👏      |
| markdown-table@^1.1.1 | 565   | 1          | 👏      |
| ora@^1.3.0            | 411   | 1          | 🔨      |
| eslint@^4.13.1        | 63751 | 1          | 👏      |
| tap@^11.0.0           | 3708  | 1          | 👏      |
| tape@^4.8.0           | 3707  | 2          | 👏      |

> if you see modules that are not in your package.json running `npm update` should resolve your project tree
```

## TLDR;

This module finds the amount of code that your project consists of, then it finds the amount of code used by all of your dependencies and gives you a grade based on how well you are using that dependency
