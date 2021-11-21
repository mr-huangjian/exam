
/**
 解题思路：

 从后往前看，【记下最左边走到最后的index为lastPos】
 如果 index + nums[index] >= lastPos， 则 lastPos = index
 如果最终 lastPos == 0, 表示可以走到最后
 */

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

// [2,3,1,1,4]
// [3,2,1,0,4]