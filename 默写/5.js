

const readline = require('readline') 

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.on('line', (cmd) => {
	console.log(Number(isPow2(cmd)))
})


function isPow2(n) {
	n = Number(n)
	
	if (n === 0) {
		return false
	}
	return (n & (n - 1)) === 0
}


// 0	1 	2 	6 	8 	100	128

console.log(Number(isPow2(0)))
console.log(Number(isPow2(1)))
console.log(Number(isPow2(2)))

console.log(Number(isPow2(6)))
console.log(Number(isPow2(8)))
console.log(Number(isPow2(100)))
console.log(Number(isPow2(128)))