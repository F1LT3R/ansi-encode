const he = require('he')

module.exports = str => {
	if (typeof str !== 'string') {
		throw new TypeError('ANSI-to-String: You must pass a string!')
	}

	return str.split('').map(char => {
		const enc = he.encode(char)

		if (enc.length > 1) {
			return '\\u' + enc
				.substr(3, enc.indexOf(';') - 3)
				.padStart(4, 0)
				.toLowerCase()
		}

		return enc
	}).join('')
}
