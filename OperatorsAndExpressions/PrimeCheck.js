/**
 * Created by Gogov on 6/16/2016.
 */
function solve(args) {
    var N = args[0]*1;
    var isPrime=true;
    if (N < 2) {
        console.log('false');
        return;
    }

    for(var i=2;i<N;i+=1){
        if(N%i===0){
            isPrime=false;
            break;
        }
    }

    if (isPrime) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}
//solve(['-1']);