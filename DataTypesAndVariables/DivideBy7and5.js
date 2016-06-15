function solve(args) {

    var isDivisable = ((args[0] * 1) % 7 === 0)&&((args[0] * 1) % 5 === 0);
    if (isDivisable) {
        console.log('true ' + args[0] * 1)
    }
    else {
        console.log('false ' + args[0] * 1)
    }
}
