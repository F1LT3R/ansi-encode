# ANSI Encode

> 🔢  Convert ANSI escape sequences to regular strings.

[![Build Status](https://travis-ci.org/F1LT3R/ansi-encode.svg?branch=master)](https://travis-ci.org/F1LT3R/ansi-encode)
[![Coverage Status](https://coveralls.io/repos/github/F1LT3R/ansi-encode/badge.svg?branch=master)](https://coveralls.io/github/F1LT3R/ansi-encode?branch=master)
[![Npm Version](https://img.shields.io/npm/v/ansi-encode.svg)](https://www.npmjs.com/package/ansi-encode)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Usage

```javascript
const chalk = require('chalk')

const ansiEscapeStr = chalk.green('Hello, world!')
// '\u001b[32mHello, world!\u001b[39m'

const result = ansiEncode(ansiEscapeStr)
// '\\u001b[32mHello, world!\\u001b[39m'
```

## Installation

```shell
yarn add ansi-encode
```

## About

This simple Node module takes a JavaScript string containing ANSI escape sequences and converts them into regular JavaScript strings. It is a bit like using `escape(string)`, where `escape()` turns individual characters into their respective codes; wheres`ansiEncode()` converts ANSI escape sequences back into plain strings.

This `ansi-encode` exists because I ran into problems creating tests color terminal output in other Node modules. When a test failed in Mocha, I was able to see the ANSI escape codes and copy the correct string into the test. When I started using [AVA - The Futuristic Test Runner](https://github.com/avajs/ava) for testing code, I discovered the escape sequences were not printed. This gave me no way to test color console output.

