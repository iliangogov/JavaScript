/**
 * Created by Gogov on 6/27/2016.
 */
function solve(args) {
    var n = +args,
        i, j, len,
        isPrime = false,
        theSieve = [];

    for (i = n; i >= 2; i -= 1) {
        len = Math.sqrt(i);
        isPrime = true;
        for (j = 2; j <= len; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log(i);
            return;
        }
    }
    if(n===1)console.log(1);
}

solve(['13']);
solve(['126']);
solve(['1']);

