/**
 * Created by Gogov on 7/5/2016.
 */
function solve(args){
    var heights = args[0].split(' ').map(Number);
    var len=heights.length;
    var sum=0;
    var ispocket=false;

    for(var i=1;i<len-1;i+=1){
        if(heights[i-1]>heights[i-2]&&heights[i+1]>heights[i+2]){
            ispocket=true;
        }else{
            ispocket=false;
        }
        if(heights[i]<heights[i-1]&&heights[i]<heights[i+1]){
            if(ispocket) {
                sum += heights[i];
            }
        }
    }

    console.log(sum);
}
solve(["53 20 1 30 2 40 3 3 10 1"]);
