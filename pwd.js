// if (cmd==='pwd'){
//     console.log(process.cwd());
// }

// process.stdout.write('\nprompt > ');


const pwd = process.stdin.on('data', (data) =>{
    const cmd =data.toString().trim();
    console.log(process.cwd());
    process.stdout.write('\nprompt > ');
});

module.exports = function () {
    // pwd code
    pwd
}