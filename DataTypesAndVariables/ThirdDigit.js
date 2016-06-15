/**
 * Created by Gogov on 6/15/2016.
 */
function solve(args) {
    var target=args[0];
    var enoughLength=target.length >= 3 ;
    if(enoughLength) {
        var digit = target[target.length - 3] * 1;
    }
    else{
        digit=0;
    }
    if(digit===7){
        console.log('true');
    }
    else {
        console.log('false '+digit);
    }
}
solve(['5']);