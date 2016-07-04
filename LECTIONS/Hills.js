/**
 * Created by Gogov on 6/30/2016.
 */0
function solve(args){
    var input= args[0].split(' ').map(Number);
    var i;
    var len=input.length;
    var counter=0;
    var maxCounter=0;

    for(i=1;i<=len;i+=1){
        if(input[i-1]>input[i]||input[i-1]<input[i]){
            counter += 1;
        }
        if(counter>maxCounter){
            maxCounter=counter;
        }
        if((input[i]>input[i-1])&&input[i]>input[i+1]){
            counter = 0;
        }
    }
    console.log(maxCounter);
}
solve(['5 1 7 4 8']);