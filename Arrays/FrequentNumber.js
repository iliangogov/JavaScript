/**
 * Created by Gogov on 6/26/2016.
 */
function solve(args) {
    var input = (args + '').split('\n').map(Number),
        i,
        mostFrequent,
        counter=1,
        bestCounter=0,
        len=input.length;
    input.sort(function(a, b){return a-b});
    mostFrequent=input[0];
    for(i=0;i<len-1;i+=1){
        if(+input[i]===+input[i+1]){
            counter+=1;
        }else{
            counter=1;
        }
        if(counter>bestCounter){
            bestCounter=counter;
            mostFrequent=+input[i];
        }
    }
    console.log(mostFrequent+' ('+bestCounter+' times)');
}
