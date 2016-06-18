/**
 * Created by Gogov on 6/15/2016.
 */
function solve(args) {
    var target=args[0]*1;
   var mask=1<<3;
    if((mask&target)===0){
        console.log(0);
    }
    else{
        console.log(1);
    }

}
//solve(['15']);
