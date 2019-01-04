| [index](../README.md) | [prettier-c](prettier-c.md) | prettier-f |
|-----------------------|-------------------|-------|

# `prettier-f` command

Use the configuration to check that all files match [prettier](https://github.com/prettier/prettier) code style.

## Usage

package.json adds checkFiles attribute

```json
...
 "checkFiles":[
    "src/**/*.js*",
    "src/**/*.ts*",
    "src/**/*.less",
    "config/**/*.js*",
    "scripts/**/*.js"
  ],
...
```

Add a script

```json
"scripts": {
    "lint-prettier": "check-prettier"
},
```
