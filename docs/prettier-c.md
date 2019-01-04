| [index](../README.md) | prettier-c | [prettier-f](prettier-f.md) |
|-----------------------|-------------------|-------|

# `prettier-c` command

Use the command line to check that all files match [prettier](https://github.com/prettier/prettier) code style.

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