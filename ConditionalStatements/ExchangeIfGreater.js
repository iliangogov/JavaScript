/**
 * Created by Gogov on 6/18/2016.
 */
function solve(args) {
    var a = args[0]*1;
    var b = args[1]*1;

    if(a>b){
        var temp;
        temp=a;
        a=b;
        b=temp;
    }
    console.log(a,b);
}
//solve(['5.5','4.5']);
