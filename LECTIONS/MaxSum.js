/**
 * Created by Gogov on 7/2/2016.
 */
function Solve(params) {
    var N = parseInt(params[0]);
    var numbers = [];
    for (var i = 1; i <= N; i++) {
        numbers[i] = parseInt(params[i]);
    }

    var maxSum = -2000000000;
    for (var i = 1; i <= N; i++) {
        for (var j = i; j <= N; j++) {
            var localSum = 0;
            for (var k = i; k <= j; k++) {
                localSum += numbers[k];
            }
            if (localSum > maxSum) {
                maxSum = localSum;
            }
        }
    }

    // There is a smarter solution using prefix sums
    // Prefix sums will remove the need of the most inner loop
    // More information on prefix sums: http://en.wikipedia.org/wiki/Prefix_sum

    console.log(maxSum);
}
Solve(['6','1','3','-5','8','7','-6']);

