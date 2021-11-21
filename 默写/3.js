
const readline = require('readline') 

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

rl.on('line', (cmd) => {
	// 将百分比换成小数
	cmd = cmd.replace('%', '') / 100.0
	// 调用方法，将小数换成百分比
	let result = `${getP(cmd).toFixed(2) * 100}%`
	// 输出结果
	console.log(result)
})


function getP(c) {
	let n = 1
	let array = [c]

	function next() {
		n = n + 1

		const item = array.reduce((total, value) => {
			return total - value
		}, 1) * (c * n > 1.0 ? 1.0 : c * n)
		array.push(item)

		if (c * n < 1) {
			next()
		}
	}

	next()

	return 1.0 / array.reduce((total, value, index) => {
		return total + value * (1 + index)
	}, 0)
}

function getC(p, min=0, max=1) {
	let mid = (min + max) / 2.0

	let result = getP(mid)
	if (result > p) {
		return getC(p, min, mid)
	} else if (result < p) {
		return getC(p, mid, max)
	} else {
		return mid
	}
}

// console.log(getC(25 / 100.0).toFixed(4))
// console.log(getC(30 / 100.0).toFixed(2))
// console.log(getC(60 / 100.0).toFixed(2))
