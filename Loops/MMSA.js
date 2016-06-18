/**
 * Created by Gogov on 6/18/2016.
 */

function solve(args) {
    var targetLength=args.length;
    var min=args[0]*1;
    var max=args[0]*1;
    var average=0;
    var sum=0;

    for(var i=0;i<targetLength;i+=1){
        sum+=args[i]*1;
        if(args[i]>max){
            max=args[i]*1;
        }
        if(args[i]<min){
            min=args[i]*1;
        }
    }

    average=sum/targetLength;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + average.toFixed(2));
}
//solve(['12', '-5', '0', '6.5']);
