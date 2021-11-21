
// 第四题的问题一（是否是有效的UTF8序列）

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (cmd) => {
	console.log(isValid(cmd))
})

function getLength(serial) {
	const uri = serial.split(',').map((value) => {
		return `%${value}`
	}).join('')

	try {
		const string = decodeURI(uri)
		return string.length
	} catch(e) {
		return 0
	}
}

function isValid(serial) {
	return getLength(serial) === 0 ? 0 : 1
}
