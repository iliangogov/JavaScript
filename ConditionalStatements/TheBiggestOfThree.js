/**
 * Created by Gogov on 6/18/2016.
 */
function solve(args) {
    var a = args[0]*1;
    var b = args[1]*1;
    var c = args[2]*1;
    var biggest;
    if(a>b){
       if(a>c){
           biggest=a;
       }
        else{
           biggest=c;
       }
    }
    else{    //a<b
        if(b>c){
            biggest=b;
        }
        else{
            biggest=c;
        }
    }
    console.log(biggest);
}
//solve(['-1','0','2']);