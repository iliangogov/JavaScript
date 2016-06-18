/**
 * Created by Gogov on 6/18/2016.
 */

function solve(args) {
    var target=args[0]*1;
    var output='';
    for(var i=1;i<=target;i+=1){
        output+=i+' ';
    }
    console.log(output);
}
//solve('5')