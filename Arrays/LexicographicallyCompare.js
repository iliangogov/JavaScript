/**
 * Created by Gogov on 6/25/2016.
 */
function solve(args){
    var input = (args[0] + '').split('\n');
    var A=String(input[0]),
        B=String(input[1]),
        len=A.length,
        done=false,
        i;

    if (A.length >= B.length) {
        len = B.length;
    } else {
        len = A.length;
    }

   for(i=0;i<len;i+=1) {
       if (A[i] < B[i]) {
           console.log('<');
           done = true;
           break;
       }

       if (A[i] > B[i]) {
           console.log('>');
           done = true;
           break;
       }

   }
       if (!done) {
           if (A.length > B.length) {
               console.log('>');
           }
           else if (A.length === B.length) {
               console.log('=');
           }
           else {
               console.log('<');
           }
       }

}

