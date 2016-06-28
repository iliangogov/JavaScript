/**
 * Created by Gogov on 6/27/2016.
 */
function solve(args) {

     var   numbers = args[1]
            .split(' ')
            .map(Number)
            .filter(function (n,index,arr) {
                return (arr[index-1]<n&&n>arr[index+1]);
            }).length;
    console.log(numbers);
}
solve(['6','-26 -25 -28 31 2 27']);