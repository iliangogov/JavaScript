/**
 * Created by Gogov on 6/18/2016.
 */
function solve(args) {
    var a = args[0]*1;
    var b = args[1]*1;
    var c = args[2]*1;
    if(a===0||b===0||c===0){
        console.log(0);
    }
    if((a>0&&b>0&&c>0)
        ||(a>0&&b<0&&c<0)
        ||(a<0&&b<0&&c>0)
        ||(a<0&&b>0&&c<0)){
        console.log('+');
    }
    if((a>0&&b>0&&c<0)
        ||(a>0&&b<0&&c>0)
        ||(a<0&&b>0&&c>0)
        ||(a<0&&b<0&&c<0)){
        console.log('-')
    }

}
//solve(['-2','-2','-2']);