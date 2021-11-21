
// 第四题的问题二（unicode字符数量）

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (cmd) => {
	console.log(getLength(cmd))
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
