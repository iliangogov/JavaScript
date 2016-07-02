
function solve(args){
    var n=+args[0];
    var k=+args[1];
    var numbers=args[2].split(' ').map(Number);
    var output=[],
        i,
        j,
        sum=0;

    for( i=0;i<=n-k;i+=1){

        var max=numbers[i];
        var min=numbers[i];
        for( j=i;j<k+i-1;j+=1){

            var curMax=Math.max(numbers[j],numbers[j+1]);
            var curMin =Math.min(numbers[j],numbers[j+1]);
            if(curMax>max){
                max=curMax;
            }
             if(curMin<min){
                 min=curMin;
             }
        }
        sum=max+min;
        output.push(+sum);
        sum=0;


    }
    
console.log(output.join(','));
}
solve([
   '5',
    '3',
    '7 7 8 9 10'
])