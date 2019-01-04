const check = require('../bin/prettier-c/check')

test('good file', async () => {
  const code = await check(['test/good.js'])
  expect(code).toBe(0)
});