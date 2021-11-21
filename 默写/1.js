
/**
 Number(666).toString(2)
 101 0011010
 10011010 00000101

 Number(888).toString(2)
 1101111000
 11111000 00000110

 */

function decodeZigZag(hex) {
	const radis10 = parseInt(hex)
	const radis2 = radis10.toString(2)
	const symbol = radis2.charAt(radis2.length - 1)

	// 正数
	if (symbol == '0') {
		return (radis10 >> 1)
	}

	// 负数
	if (symbol == '1') {
		return -(~(((~radis10) >> 1) - 1))
	}
}

console.log(decodeZigZag(0x268cb43))
console.log(decodeZigZag(0x7ff))
console.log(decodeZigZag(0x2b7b))

console.log(decodeZigZag(0x123a))
console.log(decodeZigZag(0xf6))
console.log(decodeZigZag(0x282))