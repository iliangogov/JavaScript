/*function solve(args) {
    let line = args[0].split(' ');
    let n = +line[0];
    let k = +line[1];

    let array = args[1].split(' ').map(Number);

    function transform(num, n1, n2) {
        if(num === 0) {
            return Math.abs(n1 - n2);
        }
        else if(num === 1) {
            return n1 + n2;
        }
        else if(num % 2 === 0) { // even
            return Math.max(n1, n2);
        }
        else {
            return Math.min(n1, n2);
        }
    }

    array[-1] = array[n - 1];
    array[n] = array[0];

    for(let i = 0; i < k; i += 1) {
        let transformedArray = [];

        for(let j = 0; j < n; j += 1) {
            transformedArray[j] = transform(array[j], array[j - 1], array[j + 1]);
        }

        array = transformedArray.slice();

        array[-1] = array[n - 1];
        array[n] = array[0];
    }

    array[-1] = 0;
    array[n] = 0;
    let sum = array.reduce((a, b) => a + b);

    console.log(sum);
}*/
function solve(params) {
    var nk = params[0].split(' ').map(Number),
        s = params[1].split(' ').map(Number),
        n=nk[0],
        k=nk[1];

    s[-1]=s[n-1];
    s[n]=s[0];

    var transformed=[];
    for(var j=0;j<k;j+=1) {
        for (var i = 0; i < n; i += 1) {
            if (s[i] % 2 === 0) {
                if (s[i] === 0) {
                    transformed[i] = Math.abs(s[i - 1] - s[i + 1])
                } else {
                    transformed[i] = Math.max(s[i - 1], s[i + 1]);
                }
            }
            if (s[i] % 2 !== 0) {
                if (s[i] === 1) {
                    transformed[i] = s[i - 1] + s[i + 1];
                } else {
                    transformed[i] = Math.min(s[i - 1], s[i + 1]);
                }
            }

        }
        s=transformed.slice();
        s[-1]=s[s.length-1];
        s[s.length]=s[0];
    }
    s[-1]=0;
    s[n]=0;

    var sum=0;
    for(var num of s){
        sum+=num;
    }
        console.log(sum);
}

solve(['10 3','1 9 1 9 1 9 1 9 1 9']);