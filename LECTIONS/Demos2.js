/**
 * Created by Gogov on 7/5/2016.
 */
function solve(args){
    var input= args[0].split(' ').map(Number);
    var i;
    var len=input.length;
    var sum=input[0];
    var maxCounter=0;

    for(i=1;i<=len;i+=1){
        if(input[i-1]<input[i]||input[i-1]>input[i]){
            sum += input[i];
        }
        if(sum>maxCounter){
            maxCounter=sum;
        }
        if((input[i]<input[i-1])&&input[i]<input[i+1]){
            sum = input[i];
        }
    }
    console.log(maxCounter);
}
solve(['5 1 7 1 4']);
solve(['4 2 3 6 1 2 5 4']);