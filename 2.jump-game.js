// 穿越峡谷
// https://github.com/jiejackyzhang/leetcode-note/wiki/55.-Jump-Game
// https://github.com/littleMengMeng/lc/wiki/45-%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F-II

/*
解题思路为：

从后往前考虑，from length-1 to 0；
记下最左边的可以走到最后的index，为lastPos；
对于下标i的元素，如果i+nums[i] >= lastPos，则update lastPos = i；
如果最后lastPos == 0，则表明从0可以走到最后。
*/

function canJump(nums) {
	let lastPos = nums.length - 1
    for(let i = nums.length - 2; i >= 0; i--) {
        if(i + nums[i] >= lastPos) {
            lastPos = i
        }
    }
    return lastPos == 0
}