
// c = c.replace('%', '') / 100.0
// `${result * 100}%`

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

    return result.toFixed(2)
}

console.log(getP(8.5/100.0));
console.log(getP(30.21/100.0));
console.log(getP(57.14/100.0));


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

console.log(getC(0.3).toFixed(2));
console.log(getC(0.6).toFixed(2));



























//
