
// 第二题


// 问题一（解题思路）
/**
 答：
 从后往前算，记下最左边走到最后的 index 为 lastPos
 如果 index + nums[index] >= lastPos 则 lastPos = index
 如果 lastPos = 0 则表示可以走到最后
 */


// 问题二

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (cmd) => {
    console.log(canJump(cmd))
})

function canJump(nums) {
    nums = JSON.parse(nums)

	let lastPos = nums.length - 1
	for (let index = nums.length - 2; index >= 0; index--) {
		if (index + nums[index] >= lastPos) {
			lastPos = index
		}
	}
	return lastPos == 0
}

// 测试代码
// console.log(canJump('[2,3,1,1,4]'))
// console.log(canJump('[3,2,1,0,4]'))
