
// 第一题


// 问题一（填空题）
// Number(666).toString(2)
// 666的二进制为 1010011010
// 666的varint为 10011010 00000101

// Number(888).toString(2)
// 888的二进制为 1101111000
// 888的varint为 11111000 00000110


// 问题二

function decodeZigZag(hex) {
	const radix10 = parseInt(hex)
	const radix2 = radix10.toString(2)
	const symbol = radix2.charAt(radix2.length - 1)

	// 正数
	if (symbol == '0') {
		return (radix10 >> 1)
	}

	// 负数
	if (symbol == '1') {
		return -(~(((~radix10) >> 1) - 1))
	}
}

console.log(decodeZigZag(0x268cb43))
console.log(decodeZigZag(0x7ff))
console.log(decodeZigZag(0x2b7b))
console.log(decodeZigZag(0x123a))
console.log(decodeZigZag(0xf6))
console.log(decodeZigZag(0x282))
