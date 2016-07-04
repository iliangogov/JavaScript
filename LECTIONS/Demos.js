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
var arr=[1,2,7,3,4,8,2,1,9,4];
console.log(arr.filter(function(a,b,c){
    return a>c[b-1]&&a>c[b+1];
}));
console.log(arr);