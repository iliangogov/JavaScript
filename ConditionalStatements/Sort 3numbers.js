/**
 * Created by Gogov on 6/18/2016.
 */
function solve(args) {
    var a = args[0]*1;
    var b = args[1]*1;
    var c = args[2]*1;
    var biggest;
    var mid;
    var smallest;
    if(a>b){
        if(a>c){
            biggest=a;
            if(b>c){
                mid=b;
                smallest=c;
            }
            else{
                mid=c;
                smallest=b;
            }
        }
        else{
            biggest=c;
            mid=a;
            smallest=b;
        }
    }
    else{    //a<b
        if(b>c){
            biggest=b;
            if(a>c){
                mid=a;
                smallest=c;
            }
            else{
                mid=c;
                smallest=a;
            }
        }
        else{
            biggest=c;
            mid=b;
            smallest=a;
        }
    }
    console.log(biggest,mid,smallest);
    console.log(...args.sort((a,b)=>b-a));
}
solve(['5','6','-2']);
