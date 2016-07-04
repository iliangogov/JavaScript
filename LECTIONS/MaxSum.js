/**
 * Created by Gogov on 7/2/2016.
 */

/*
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
*/

function Solve(args){
    var len=+args[0];
    var sequence=[] ;
    for(var y=1;y<=len;y+=1){
        sequence.push(+args[y]);
    }
    var sum=0;
    var bestSum=sequence[0];

    for(var i=0;i<len-1;i+=1){
        sum=sequence[i];
        for(var j=i+1;j<=len;j+=1){

            if(sum>bestSum){
                bestSum=sum;
            }
            sum+=sequence[j];
        }
    }

    console.log(bestSum);
}
Solve(['8', '1', '6', '-9', '4', '4', '-2', '10', '-1']);
Solve(['6','1','3','-5','8','7','-6']);
Solve(['9', '-9', '-8', '-8', '-7', '-6', '-5', '-1', '-7', '-6']);

