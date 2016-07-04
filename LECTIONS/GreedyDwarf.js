/**
 * Created by Gogov on 7/4/2016.
 */
function solve(args) {
    var valley=args[0].split(', ').map(Number);
    var patternsCount=+args[1];
    var patterns=[];
    for(var i=0;i<patternsCount;i+=1){
        patterns[i]=[];
        for(var j=0;j<args[i+2].split(', ').length;j+=1){
            patterns[i][j]=args[i+2].split(', ')[j]*1;
        }
    }

    /*console.log(valley);
    console.log(patternsCount);
    console.log(patterns);*/

    var currIndex=0;
    var onField=true;
    var tempSum=0;
    var bestSum=-2000000;


       for(var i=0;i<patternsCount;i+=1) {
           while(onField) {
               for (var j = 0; j < patterns[i].length; j += 1) {
                   if (currIndex < 0 || currIndex >= valley.length || valley[currIndex] === 'X') {
                       onField = false;
                       break;
                   }
                   tempSum += valley[currIndex];
                   valley[currIndex] = 'X';
                   currIndex += patterns[i][j];
               }
           }
           if(tempSum>bestSum){
               bestSum=tempSum;
           }
           tempSum=0;
           currIndex=0;
           valley=args[0].split(', ').map(Number);
           onField=true;
       }
    console.log(bestSum);
}
solve(['1, 3, -6, 7, 4, 1, 12',
    '3',
    '1, 2, -3',
    '1, 3, -2',
    '1, -1'
]);
