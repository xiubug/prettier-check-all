| [index](../README.md) | prettier-c | [prettier-f](prettier-f.md) |
|-----------------------|-------------------|-------|

# `prettier-c` command

Use the command line to check that all files match [prettier](https://github.com/prettier/prettier) code style.

## Usage

Use it in the `prettier-c` script in your package.json:

```json
  "scripts": {
    "prettier-c": "prettier-c src/**/*.js"
  },
```

All args are forwarded to prettier:

```json
  "scripts": {
    "prettier-c": "prettier-c --single-quote --trailing-comma es5 src/**/*.js"
  },
```