"use strict";

// $(document).ready(function () {
//     function setup() {
//         // Write your code here.
//         document.getElementsByClassName("remove")[0].addEventListener('click', function(el) {
//             var child = document.getElementsByClassName("remove")[0]
//             child.parentNode.parentNode.removeChild(child.parentNode);
//             console.log(document.body.innerHTML);
//         })
//     }

//     // Example case. 
//     document.body.innerHTML = `
//       <div class="image">
//         <img src="https://goo.gl/kjzfbE" alt="First">
//         <button class="remove">X</button>
//       </div>
//       <div class="image">
//         <img src="https://goo.gl/d2JncW" alt="Second">
//         <button class="remove">X</button>
//       </div>`;

//     setup();

//     //document.getElementsByClassName("remove")[0].click()
//     console.log(document.body.innerHTML);
// });

// function formatDate(userDate) {
//     // format from M/D/YYYY to YYYYMMDD
//     const params = userDate.split('/')
//     let passedMonth = params[0]
//     let passedDay = params[1]
//     const passedYear = params[2]

//     if(passedMonth.length === 1){
//         const zeroLeadMonth = '0' + passedMonth
//         passedMonth = zeroLeadMonth
//     }

//     if(passedDay.length === 1){
//         const zeroLeadDay = '0' + passedDay
//         passedDay = zeroLeadDay
//     }

//     return `${passedYear}${passedMonth}${passedDay}`
//   }

//   console.log(formatDate("12/31/2014"));

// function createCheckDigit(membershipId) {
//     // Write the code that goes here.
//     if (membershipId.length === 1) {
//         return membershipId
//     }
//     let sum = membershipId
//     while (sum.length > 1) {
//         let tempSum = 0
//         // membershipId.forEach(element => {
//         //     tempSum+=Number(element)
//         // });
//         for (let index = 0; index < sum.length; index++) {
//             const element = sum[index];
//             tempSum += Number(element)
//         }
//         sum = tempSum.toString()
//     }
//     return Number(sum);
// }
// console.log(createCheckDigit("55555"));

// function newMessage(topicName) {
//     //Write your code here
//     if (topicName) {
//         document.querySelector(`[data-topic-name]`).removeAttribute("style")
//         document.querySelector(`[data-topic-name=${topicName}]`).setAttribute("style", "background-color: red");
//     }

// }


// document.body.innerHTML = `<div>
//     <p data-topic-name="discussion">General discussion</p>
//     <p data-topic-name="bugs">Bugs</p>
//     <p data-topic-name="animals">Animals</p>
//   </div>`;
// newMessage("discussion");
// console.log(document.body.innerHTML);
'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// Complete the miniMaxSum function below.
// function miniMaxSum(arr) {
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     let firstSum = arr.slice(0, 4).reduce(reducer)
//     let secondSum = arr.slice(1, 5).reduce(reducer)
//     let thirdSum = arr.reduce(reducer) - arr[2]
//     let fourthSum = arr.reduce(reducer) - arr[3]
//     let fifthSum = arr.reduce(reducer) - arr[1]

//     console.log(Math.min(firstSum, secondSum, thirdSum, fourthSum, fifthSum) + ' ' + Math.max(firstSum, secondSum, thirdSum, fourthSum, fifthSum))

// }

// function main() {
//     //const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
//     let arr = [1, 2, 3, 4, 5]
//     miniMaxSum(arr);
// }

// main()

// function birthdayCakeCandles(ar) {
//     let maxHeight = Math.max(...ar)
//     let counter = 0
//     ar.forEach(element => {
//         if (element === maxHeight) {
//             counter += 1
//         }
//     });
//     return counter
// }

// function timeConversion(s) {
//     /*
//      * Write your code here.
//      */
//     let newStr = ''
//     let timeZone = s.slice(s.length - 2, s.length)
//     if (timeZone === 'AM') {
//         let prefix = Number(s.slice(0, 2)) + 12
//         if (Number(s.slice(0, 2)) === 12) {
//             prefix = '00'
//             newStr = prefix.toString() + s.slice(2, s.length - 2)
//         } else {
//             newStr = s.slice(0, s.length - 2)
//         }

//     } else {
//         let prefix = Number(s.slice(0, 2)) + 12
//         if (Number(s.slice(0, 2)) === 12) {
//             prefix = '00'
//         }
//         newStr = prefix.toString() + s.slice(2, s.length - 2)
//     }

//     return newStr

// }

// function gradingStudents(grades) {
//     /*
//      * Write your code here.
//      */
//     let result = []
//     grades.forEach(element => {
//         const nextDivided = findNextDevidedByFive(element)
//         if (element < 38) {
//             result.push(element)
//         } else {
//             if (nextDivided - element >= 3) {
//                 result.push(element)
//             } else {
//                 result.push(nextDivided)
//             }
//         }
//     });

//     function findNextDevidedByFive(number) {
//         let newNumber = number
//         while (newNumber % 5 !== 0) {
//             newNumber++
//         }
//         return newNumber
//     }

//     return result

// }

// console.log(gradingStudents([73, 67, 38, 33]))

// function findNumber(arr, k) {

//     arr.shift()
//     arr.map(Number)
//     let result = "NO"
//     if (arr.some(x => x === Number(k))) {
//         result = "YES"
//     }
//     return result
// }

// function oddNumbers(l, r) {
//     let results = []
//     for (let index = l; index <= r; index++) {
//         if (index % 2 !== 0) {
//             results.push(index)
//         }
//     }

//     return results

// }

// function fizzBuzz(n) {
//     // Write your code here
//     for (let index = 1; index <= n; index++) {
//         if (index % 3 === 0 && index % 5 === 0) {
//             console.log("FizzBuzz")
//         }
//         else if (index % 3 === 0 && index % 5 !== 0) {
//             console.log("Fizz")
//         }
//         else if (index % 3 !== 0 && index % 5 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(index)
//         }

//     }

// }

// console.log(fizzBuzz(25))

// function foo() {
//     return 5
// }

// let a = foo
// // console.log(a)

// var x = 100
// function foo(){
// if (false) {
//     x = 200
// }
// console.log(x)
// }

// foo()


// function bitFlip(arr) {
//     var A = arr.slice(1, arr.length)
//     var sum = 0;
//     for (var i = 0; i < A.length; i++) {
//         sum += A[i];
//         A[i] = A[i] == 0 ? 1 : -1;
//     }

//     var x = { value: 0, left: 0, right: 0 };
//     var y = { value: 0, left: 0 };
//     for (var n = 0; n < A.length; n++) {
//         if (y.value + A[n] >= 0) {
//             y.value += A[n];
//         } else {
//             y.left = n + 1;
//             y.value = 0;
//         }
//         if (x.value < y.value) {
//             x.left = y.left;
//             x.right = n;
//             x.value = y.value;
//         }
//     }

//     return sum + x.value
// }

// console.log(bitFlip([ 1, 0, 0, 1, 0, 0, 1, 0]))

// function duplicate(arr) {
//     arr.push(...arr)
//     console.log(arr)
// }
// duplicate([1, 2, 3, 4, 5]);



// function duplicate(arr) {
//     return arr.concat(arr)
// }
// console.log(duplicate([{ name: 'a' }, 2, null]))

function getData(number) {
    return new Promise((resolve, reject) => {
        if (number) {
            resolve(number)
        } else {
            reject('Not Ok')
        }
    })
}

// getData(1).then(console.log).catch(console.log)
// getData(2).then(console.log).catch(console.log)
// getData().then(console.log).catch(console.log)
// getData(3).then(console.log).catch(console.log)
// for (let index = 4; index <= 10; index++) {
//     getData(index).then(console.log).catch(console.log)
// }
// getData(11).then(console.log).catch(console.log)

async function getManyData() {
    await getData(1).then(console.log).catch(console.log)
    await getData(2).then(console.log).catch(console.log)
    await getData().then(console.log).catch(console.log)
    await getData(3).then(console.log).catch(console.log)
    for (let index = 4; index <= 10; index++) {
        await getData(index).then(console.log).catch(console.log)
    }
    await getData(11).then(console.log).catch(console.log)
}

getManyData()