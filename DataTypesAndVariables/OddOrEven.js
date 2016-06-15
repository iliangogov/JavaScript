
function solve(args) {

    var isEven = (args[0] * 1) % 2 === 0;
    if (isEven) {
        console.log('even ' + args[0] * 1)
    }
    else {
        console.log('odd ' + args[0] * 1)
    }
}
