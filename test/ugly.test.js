const check = require('../bin/prettier-c/check')

test('ugly file', async () => {
  const code = await check(['test/ugly.js']);
  expect(code).toBe(3);
});