/**
 * Created by Gogov on 6/25/2016.
 */

/*
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
*/

function solve(args){
  var len=+args[0];
    var arr=[];
    for(var i=0;i<len;i+=1){
        arr[i]=+args[i+1];
    }
    console.log(arr);
    var sum=arr[0];
    var bestSum=arr[0];

    for(var i=1;i<len;i+=1){
        if(arr[i]>arr[i-1]){
            sum+=arr[i];
        }else{
            sum=arr[i];
        }
        if(sum>bestSum){
            bestSum=sum;
        }
    }
    console.log(bestSum);
}

solve(['8', '7', '11', '22', '3', '2', '2', '2', '24']);