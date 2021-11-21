
// 第三题的问题一（已知c求p）

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (cmd) => {
    // 将百分比转换成小数
	cmd = cmd.replace('%', '') / 100.0
    // 调用方法，将小数四舍五入并转换成百分比
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

	let result = 1.0 / array.reduce((total, value, index) => {
		return total + value * (1 + index)
	}, 0)

	return result
}
