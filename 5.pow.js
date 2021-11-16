
//写程序判断输入的数字是否是2的整数次幂(输入是32位无符号整数)

let a = Number(256).toString(2)
console.log(a);



function pow2(n) {
    if (n === 0) {
        return false
    }
    return (n & (n - 1)) === 0
}

console.log(pow2(0));
console.log(pow2(1));
console.log(pow2(2));
console.log(pow2(3));
console.log(pow2(4));
console.log(pow2(6));
console.log(pow2(8));
console.log(pow2(10));
