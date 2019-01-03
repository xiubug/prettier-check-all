#!/usr/bin/env node
"use strict";
const execa = require("execa");
const args = process.argv.slice(2);
const NO_ERROR = "All files using prettier code style.";
const GENERAL_ERROR = "Error when running prettier:";
const STYLE_ERROR =
  "Forgot to run prettier? There are files without correct code style:";
const UNEXPECTED_ERROR = "Unexpected error:";

const prettierCheck = args => {
  args.push("-l");

  return execa("prettier", args)
    .then(() => {
      console.log(NO_ERROR);
      return 0;
    })
    .catch(error => {
      if (error.stderr) {
        console.error(GENERAL_ERROR);
        console.error(error.stderr);
        return 4;
      } else if (error.stdout) {
        console.log(STYLE_ERROR);
        console.log(error.stdout);
        return 3;
      } else {
        console.error(UNEXPECTED_ERROR);
        console.error(error);
        return 1;
      }
    });
};

prettierCheck(args)
  .then(code => {
    process.exit(code);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
