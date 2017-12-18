const test = require('tape');
const path = require('path');

const npmWhat = require('../index');

test('npm-what', (t) => {
  t.plan(1);

  t.test('makes sure output structure is formed correctly', (async (t) => {
    const output = await npmWhat(path.resolve(__dirname, '..'));
    t.deepEqual(Object.keys(output), [ 'total_code', 'languages', 'package', 'modules_raw', 'modules_stats', 'modules' ]);
    t.ok(Array.isArray(output.languages));
    t.ok(Array.isArray(output.modules_raw));
    t.equal(typeof output.modules, 'object');
    t.equal(typeof output.modules_stats, 'object');
    t.equal(typeof output.package, 'object');
    t.equal(typeof output.total_code, 'number');

    // make sure the sub structure is maintained
    for (var mod in output.modules) {
      t.equal(typeof output.modules[mod].dir, 'string');
      t.equal(typeof output.modules[mod].total_code, 'number');
      t.equal(typeof output.modules[mod].ocurrences, 'number');
      t.equal(typeof output.modules[mod].verdict, 'string');
    }
    t.end();
  }));

});
