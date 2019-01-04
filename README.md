# prettier-check-all [![Build Status](https://api.travis-ci.org/sosout/prettier-check-all.svg?branch=master)](https://travis-ci.org/sosout/prettier-check-all) [![npm version](https://img.shields.io/npm/v/prettier-check-all.svg?style=flat)](https://www.npmjs.com/package/prettier-check-all)

> Check that all files match [prettier](https://github.com/prettier/prettier) code style.


## Install

```
$ npm install --save-dev prettier prettier-check-all
```

> Make sure you have `prettier` as a dependency (or globally).

## Usage

Use it in the test script in your package.json:

```json
  "scripts": {
    "test": "prettier-c src/**/*.js"
  },
```

All args are forwarded to prettier:

```json
  "scripts": {
    "test": "prettier-c --single-quote --trailing-comma es5 src/**/*.js"
  },
```

## License

MIT
