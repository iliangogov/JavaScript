/**
 * Created by Gogov on 7/2/2016.
 */
function Solve(params) {
    var N = +params[0];

    var answer = 1;
    if(N>1) {
        for (var i = 2; i <= N; i += 1) {
            if (+params[i] < +params[i - 1]) {
                answer += 1;
            }
        }
    }

    console.log(answer);
}
Solve(['9','1','8','8','7','6','5','7','7','6']);

