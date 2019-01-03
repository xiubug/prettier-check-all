import test from "ava";
import fn from "../bin";

test("good file", async t => {
  const code = await fn(["./good.js"]);
  t.is(code, 0);
});

test("bad file", async t => {
  const code = await fn(["./bad.js"]);
  t.is(code, 4);
});

test("ugly file", async t => {
  const code = await fn(["./ugly.js"]);
  t.is(code, 3);
});
