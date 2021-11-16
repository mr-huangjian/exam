// Unicode符号范围 | UTF-8编码方式
// (十六进制) | （二进制）
// --------------------+---------------------------------------------
// 0000 0000-0000 007F | 0xxxxxxx
// 0000 0080-0000 07FF | 110xxxxx 10xxxxxx
// 0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx
// 0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx

// https://www.jb51.net/article/87418.htm
// http://c.biancheng.net/view/5602.html
// http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html

// decodeURI("%E4%B8%A5") // '严' 要捕获异常

// 在线运行 node
// https://www.nhooo.com/tool/node/

function getLength(serial) {
	let uri = serial.split(',').map(value => {
		return `%${value}`
	}).join('')

	try {
		let string = decodeURI(uri)
		return string.length
	} catch(e) {
		return 0
	}
}

function isValid(serial) {
	return getLength(serial) === 0 ? 0 : 1
}

console.log(getLength("FF,FF,FF,FF,FF,FF"))
console.log(getLength("E4,B8,A5"))
console.log(getLength("E4,B8,A5,61,61,61,61,61"))
