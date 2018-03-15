import chalk from 'chalk'
import test from 'ava'
import ansiEncode from '.'

test('Convert ANSI sequences to regular strings.', t => {
	const ansiEscapedStr = chalk.green('Test')
	const result = ansiEncode(ansiEscapedStr)
	t.is(typeof result, 'string')
	t.is(result, '\\u001b[32mTest\\u001b[39m')
})

test('Convert ANSI Emoji sequences to regular strings.', t => {
	const ansiEscapedStr = chalk.bgYellow.black(' 🖍, 🌈 & 🦄\'s ')
	const result = ansiEncode(ansiEscapedStr)
	t.is(typeof result, 'string')
	t.is(result, '\\u001b[43m\\u001b[30m \\ud83d\\udd8d, \\ud83c\\udf08 \\u0026 \\ud83e\\udd84\\u0027s \\u001b[39m\\u001b[49m')
})

test('Throws when no param passed.', t => {
	const error = t.throws(() => {
		ansiEncode()
	}, TypeError)

	t.is(error.message, 'ANSI Encode: You must pass a string!')
})

test('Throws when number passed.', t => {
	const error = t.throws(() => {
		ansiEncode(1)
	}, TypeError)

	t.is(error.message, 'ANSI Encode: You must pass a string!')
})

test('Throws when boolean passed.', t => {
	const error = t.throws(() => {
		ansiEncode(true)
	}, TypeError)

	t.is(error.message, 'ANSI Encode: You must pass a string!')
})

test('Throws when null passed.', t => {
	const error = t.throws(() => {
		ansiEncode(null)
	}, TypeError)

	t.is(error.message, 'ANSI Encode: You must pass a string!')
})

test('Throws when object passed.', t => {
	const error = t.throws(() => {
		ansiEncode({})
	}, TypeError)

	t.is(error.message, 'ANSI Encode: You must pass a string!')
})

test('Throws when function passed.', t => {
	const error = t.throws(() => {
		ansiEncode(() => {})
	}, TypeError)

	t.is(error.message, 'ANSI Encode: You must pass a string!')
})
