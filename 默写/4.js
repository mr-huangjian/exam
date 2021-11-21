
const readline = require('readline') 

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.on('line', (cmd) => {
	console.log(getLength(cmd))
})


function getLength(serial) {
	let uri = serial.split(',').map(value => {
		return `%${value}`
	}).join('')

	try {
		let string = decodeURI(uri)
		return string.length
	} catch(e) {
		return 0
	}
}

function isValid(serial) {
	return getLength(serial) == 0 ? 0 : 1
}

// FF,FF,FF,FF,FF
// E4,B8,A5
// E4,B8,A5,61,61,61,61,61
