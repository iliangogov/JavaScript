/**
 * Created by Gogov on 7/1/2016.
 */
function solve(args) {
    let target = args[0] + '';
    let len=target.length;
    let correct=true;
    let openBrCounter=0;
    let closeBrCounter=0;

    for(let i=0;i<len;i+=1){
        if(target[i]==='('){
            openBrCounter+=1;
        }
        if(target[i]===')'){
            closeBrCounter+=1;
        }
    }
    if(openBrCounter!==closeBrCounter){
        correct=false;
    }
    if(target.indexOf('(')>target.indexOf(')')||target.lastIndexOf(')')<target.lastIndexOf('(')){
        correct=false;
    }
    if(correct){
        console.log('Correct')
    }else{
        console.log('Incorrect')
    }
}
//solve([')(a+b))']);
