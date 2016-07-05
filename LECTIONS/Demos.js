/*
var numbers = [5, 1, 2, 4, 6];
numbers.sort(function(x, y) {
    return x - y;
});


console.log(numbers.filter(function (a,i,arr) {
    return (arr[i - 1] > a && a < arr[i + 1]);

}));

console.log(numbers); //[ 6, 5, 4, 2, 1 ]
var numbers = ['One', 'Two', 'Three', 'Four', 'Five'];
numbers.forEach(function(item, index) {
    console.log('Item at ' + index + ' has value ' + item);
});

var sum, product;
sum = [1, 2, 3, 4].reduce(function(sum, number) {
    return sum + number;
}, 0);
product = [1, 2, 3, 4].reduce(function(sum, number) {
    return sum * number;
}, 1);
console.log(sum);
console.log(product);
var arr = [1, [2, 3], [4], [5, 6], 7];
function flatten(arr, item) {
    if (Array.isArray(item)) {
        return arr.concat(item);
    }
    return arr.concat([item]);
}
console.log(arr.reduce(flatten, []));  //[ 1, 2, 3, 4, 5, 6, 7 ]

console.log(arr.splice(0,2,"op"));
console.log(arr);*/
/*
var arr=[1,7,7,1,4,4,2,1,9,9];
console.log(arr.filter(function(item,index,arr){
    return item===arr[index-1];

}));
*/

/*
function solve(args) {      //separate even nums with dash
    var arr=args[0].split(' ').map(Number);
    var output=arr[1]+'';
    for(var i=1;i<arr.length;i+=1){

        if(arr[i]%2===0&&arr[i-1]%2===0){
            output+='-';
        }
        output+=arr[i]+'';
    }


    console.log(output);
}
solve(['0 2 5 4 6 8']);
*/

/*
//counting most frequent item
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
    for (var j=i; j<arr1.length; j++)
    {
        if (arr1[i] == arr1[j])
            m++;
        if (mf<m)
        {
            mf=m;
            item = arr1[i];
        }
    }
    m=0;
}
console.log(item+" ( " +mf +" times ) ") ;  */

/*var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr1.sort((a,b)=>a-b));*/

/*
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(var i=0;i<a.length;i+=1){
    console.log('row '+i);
    for(var j=0;j<a[i].length;j+=1){
        console.log(a[i][j]);
    }
}
*/

function solve(args){
    var input= args[0].split(' ').map(Number);
    var i;
    var len=input.length;
    var sum=input[0];
    var maxCounter=0;

    for(i=1;i<=len;i+=1){
        if(input[i-1]>input[i]||input[i-1]<input[i]){
            sum += input[i];
        }
        if(sum>maxCounter){
            maxCounter=sum;
        }
        if((input[i]>input[i-1])&&input[i]>input[i+1]){
            sum = input[i];
        }
    }
    console.log(maxCounter);
}
solve(['5 1 7 1 4']);
solve(['4 2 3 6 1 2 5 4']);