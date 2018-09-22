/**
 * Created by Gogov on 6/18/2016.
 */
function solve(args) {
    var target=''+args;
    var targetLength = target.length;
    var hexKey = '0123456789ABCDEF';
    var sum = 0;

    for (var i = 0; i < targetLength; i += 1) {

        var digit = hexKey.indexOf(target[i]);
        sum = digit + sum * 16;
    }

    console.log(sum);
}

solve('1AE3');
