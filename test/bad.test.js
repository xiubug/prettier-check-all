const check = require('../bin/prettier-c/check')

test("bad file", async () => {
  const code = await check(['test/bad.js']);
  expect(code).toBe(4);
});