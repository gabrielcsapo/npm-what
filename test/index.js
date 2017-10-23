const test = require('tape');
const path = require('path');

test('timing test', function(t) {
  t.plan(1);

  t.test('makes sure output structure is formed correctly', function(t) {
    require('../index')(path.resolve(__dirname, '..'), function(output) {
      t.deepEqual(Object.keys(output), [
        'total_code',
        'stats',
        'languages',
        'package',
        'modules_raw',
        'modules_stats',
        'modules'
      ]);
      t.ok(Array.isArray(output.languages));
      t.ok(Array.isArray(output.modules_raw));
      t.ok(typeof output.modules === 'object');
      t.ok(typeof output.modules_stats === 'object');
      t.ok(typeof output.package === 'object');
      t.ok(typeof output.stats === 'string');
      t.ok(typeof output.total_code === 'string');
      // make sure the sub structure is maintained
      for (var mod in output.modules) {
        t.ok(typeof output.modules[mod].dir === 'string');
        t.ok(typeof output.modules[mod].total_code === 'string');
        t.ok(typeof output.modules[mod].ocurrences === 'number');
        t.ok(typeof output.modules[mod].verdict === 'string');
      }
      t.end();
    });
  });

  t.end();
});
