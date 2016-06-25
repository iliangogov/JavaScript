/**
 * Created by Gogov on 6/25/2016.
 */

function solve(args){
    var arr = (args + '').split('\n').map(Number),
        counter=1,
        bestCounter=0,
        previous=arr[0]*1,
        current,
        len=arr.length,
        i;

    for(i=1;i<len;i+=1){
        current=arr[i]*1;
        if(current>previous){
            counter+=1;
        }else{
            counter=1;
        }
        if(counter>bestCounter){
            bestCounter=counter;
        }
        previous=current;
    }
    console.log(bestCounter);
}

