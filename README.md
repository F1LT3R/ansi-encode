# ANSI Encode

> 🔢  Convert ANSI escape sequences to regular strings.

## About

This simple Node module takes a JavaScript string containing ANSI escape sequences and converts them into regular JavaScript strings. It is a bit like using `escape(string)`, where `escape()` turns individual characters into their respective codes; wheres`ansiEncode()` converts ANSI escape sequences back into plain strings.

This `ansi-encode` exists because I ran into problems creating tests color terminal output in other Node modules. When a test failed in Mocha, I was able to see the ANSI escape codes and copy the correct string into the test. When I started using AVA for testing, the escape sequences were not printed. This gave me no way to test color console output.

## Installation

```shell
yarn add ansi-to-string
```

## Usage

```javascript
const chalk = require('chalk')

const ansiEscapeStr = chalk.green('Hello, world!')
// '\u001b[32mHello, world!\u001b[39m'

const result = ansiEncode(ansiEscapeStr)
// '\\u001b[32mHello, world!\\u001b[39m'
```