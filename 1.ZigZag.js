

/*

【问题一】

https://www.jianshu.com/p/5da21a95cb1e

根据以上，写出
十进制的666（2Bytes）的二进制形式为 10 1001 1010,
Varint编码后的二进制形式为 ______???______
Number("666").toString(2) = 10 1001 1010


十进制的888（2Bytes）的二进制形式为 11 0111 1000,
Varint编码后的二进制形式为 ______???______
Number("888").toString(2) = 11 0111 1000
 */

// https://www.cnblogs.com/billmiao/p/9872160.html
// 666： 1010011010      1001 1010 0000 0101
// 888： 1101111000      1111 1000 0000 0110

// 【问题二】

/*
负数：
~(((~11)+1) << 1) = 21
Number(21).toString(2) = 10101
*/

function decodeZigZag(hex) {
    const radix10 = parseInt(hex)
    const radix2 = radix10.toString(2)
    const symbol = radix2.charAt(radix2.length - 1)

    // 正数
    if (symbol == 0) {
        return radix10 >> 1
    }

    // 负数
    if (symbol == 1) {
        return (~(((~radix10) >> 1) - 1))
    }
}

console.log(decodeZigZag(0x16));
console.log(decodeZigZag(0x268cb43));
console.log(decodeZigZag(0x7ff));
console.log(decodeZigZag(0x2b7b));
console.log(decodeZigZag(0x123a));
console.log(decodeZigZag(0xf6));
console.log(decodeZigZag(0x282));
