/**
 * Created by Gogov on 6/18/2016.
 */
function solve(args) {
    var a = args[0]*1;
    var b = args[1]*1;
    var c = args[2]*1;
    var d = args[3]*1;
    var e = args[4]*1;
    var biggest=a;
    if(b>biggest){
            biggest=b;
    }
    if(c>biggest){
            biggest=c;
    }
    if(d>biggest){
        biggest=d;
    }
    if(e>biggest){
        biggest=e;
    }
    console.log(biggest);
}
//solve(['-1','0','2','-12','6']);