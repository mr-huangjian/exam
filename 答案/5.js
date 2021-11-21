
// 第五题的问题一（填空题）
// console.log(Number(256).toString(2))
// console.log(Number(257).toString(2))
// console.log(Number(511).toString(2))
// console.log(Number(512).toString(2))

// 第五题的问题二（2的整数次幂）

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (cmd) => {
	console.log(Number(isPow2(cmd)))
})

function isPow2(num) {
	if (num === 0) {
		return false
	}
	return (num & (num - 1)) === 0
}
