
function solve(args) {
    console.log(
        numbers = args[1]
            .split(' ')
            .map(Number)
            .sort(function (a, b) {
                return a - b;
            })
            .join(' '));
}

solve(['6','-2 5 8 33 2 34 23 45 12 -10 8']);