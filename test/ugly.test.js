const check = require('../lib/prettier-c/check')

test('ugly file', async () => {
  const code = await check(['test/ugly.js']);
  expect(code).toBe(3);
});