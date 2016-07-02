/**
 * Created by Gogov on 6/27/2016.
 */
function solve(args) {
    var numbers = (args + '').split(' ').map(Number);
    var max = numbers.reduce(function (a, b) {
        return a >= b ? a : b;
    });
    console.log(max);
}

solve('100 2 3 4');
