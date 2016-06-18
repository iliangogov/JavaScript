/**
 * Created by Gogov on 6/18/2016.
 */

function solve(args) {
    var N=args[0]*1;
    var output='';

    for(var row=0;row<N;row+=1){
       for(var col=0;col<N;col+=1){
           output+=row+col+1+' ';
       }
        output+='\n';
    }
    console.log(output);
}
//solve('5');