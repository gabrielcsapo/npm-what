# npm-what

are you really using node modules properly?

[![Npm Version](https://img.shields.io/npm/v/npm-what.svg)](https://www.npmjs.com/package/npm-what)
[![Dependency Status](https://david-dm.org/gabrielcsapo/npm-what.svg)](https://david-dm.org/gabrielcsapo/npm-what)
[![devDependency Status](https://david-dm.org/gabrielcsapo/npm-what/dev-status.svg)](https://david-dm.org/gabrielcsapo/npm-what#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/npm-what.svg)]()
[![npm](https://img.shields.io/npm/dm/npm-what.svg)]()

## What is this?

pretty simple it finds the amount of code that your project consists of, then it finds the amount of code used by all of your dependencies and gives you a grade based on how well you are using that dependency

## Installation

`npm install npm-what -g`

## Usage

`npm-what -d {path to project directory}`

## Output

> this is an example using npm 3.9.3 as a test

```
So lets see how you did...
your project is 43130 lines of code
this is how you did...
┌───────────────────────────┬───────┬────────────┬─────────────────────────────────────────────────────────────┐
│                           │ LOC   │ Ocurrences │ Verdict                                                     │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ abbrev                    │ 131   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ ansicolors                │ 159   │ 3          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ ansistyles                │ 82    │ 1          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ aproba                    │ 227   │ 25         │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ archy                     │ 285   │ 2          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ chownr                    │ 99    │ 6          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ cmd-shim                  │ 411   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ columnify                 │ 655   │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ config-chain              │ 532   │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ dezalgo                   │ 103   │ 5          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ editor                    │ 86    │ 2          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ fs-vacuum                 │ 839   │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ fs-write-stream-atomic    │ 390   │ 5          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ fstream                   │ 1753  │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ fstream-npm               │ 544   │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ glob                      │ 1153  │ 4          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ graceful-fs               │ 629   │ 139        │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ has-unicode               │ 116   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ hosted-git-info           │ 330   │ 2          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ iferr                     │ 137   │ 14         │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ inflight                  │ 150   │ 9          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ inherits                  │ 76    │ 4          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ ini                       │ 199   │ 4          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ init-package-json         │ 855   │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ lockfile                  │ 658   │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ lodash._baseuniq          │ 422   │ 0          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ lodash.clonedeep          │ 112   │ 2          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ lodash.union              │ 148   │ 3          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ lodash.uniq               │ 114   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ lodash.without            │ 148   │ 3          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ mkdirp                    │ 549   │ 199        │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ node-gyp                  │ 21910 │ 0          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ nopt                      │ 746   │ 4          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ normalize-git-url         │ 200   │ 2          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ normalize-package-data    │ 1657  │ 2          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ npm-cache-filename        │ 95    │ 4          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ npm-install-checks        │ 389   │ 2          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ npm-package-arg           │ 711   │ 16         │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ npm-registry-client       │ 5289  │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ npm-user-validate         │ 166   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ npmlog                    │ 685   │ 65         │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ once                      │ 116   │ 6          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ opener                    │ 92    │ 4          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ osenv                     │ 228   │ 121        │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ path-is-inside            │ 62    │ 4          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ read                      │ 135   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ read-cmd-shim             │ 224   │ 2          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ read-installed            │ 747   │ 3          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ read-package-json         │ 592   │ 20         │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ read-package-tree         │ 498   │ 6          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ readable-stream           │ 7214  │ 2          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ realize-package-specifier │ 691   │ 5          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ request                   │ 2380  │ 0          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ retry                     │ 530   │ 1          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ rimraf                    │ 400   │ 206        │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ semver                    │ 2067  │ 18         │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ sha                       │ 153   │ 4          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ slide                     │ 174   │ 34         │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ sorted-object             │ 97    │ 1          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ strip-ansi                │ 130   │ 0          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ tar                       │ 4333  │ 4          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ text-table                │ 297   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ uid-number                │ 111   │ 3          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ umask                     │ 241   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ unique-filename           │ 103   │ 3          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ unpipe                    │ 75    │ 1          │ You are an asshole, what does this gain?                    │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ validate-npm-package-name │ 212   │ 1          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ which                     │ 220   │ 7          │ Do you contribute to this module? you probably should, dick │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ wrappy                    │ 101   │ 0          │ Hey, * pretends to highfive * you are still an asshole      │
├───────────────────────────┼───────┼────────────┼─────────────────────────────────────────────────────────────┤
│ write-file-atomic         │ 234   │ 10         │ Do you contribute to this module? you probably should, dick │
└───────────────────────────┴───────┴────────────┴─────────────────────────────────────────────────────────────┘
```
