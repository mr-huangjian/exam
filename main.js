const readline = require('readline');

function test() {
    console.log("hello world");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', function (cmd) {
        console.log('输入：' + cmd);
    });
}

test();
