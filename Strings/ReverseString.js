/**
 * Created by Gogov on 7/1/2016.
 */
function solve(args) {
    let target=args[0]+'';
    let output='';
    let len=target.length;
    for(let i=len-1;i>=0;i-=1){
        output+=target[i];
    }
    console.log(output);
}
//solve(['abc']);