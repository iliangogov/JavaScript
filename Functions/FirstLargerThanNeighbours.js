/**
 * Created by Gogov on 6/27/2016.
 */
function solve(args) {

    var    numbers = args[1]
            .split(' ')
            .map(Number);

    getFirstIndex(numbers);

    function getFirstIndex(arr){
        var i,
            indexOf,
            found=false,
            len=arr.length;

        for(i=1;i<len-1;i+=1){
            if(arr[i]>arr[i-1]&&arr[i]>arr[i+1]){
                indexOf=i;
                found=true;
                break;
            }
        }
        if(found){
            console.log(indexOf);
        }else{
            console.log(-1);
        }

    }


}
solve(['6','-26 -25 -28 31 2 27']);

