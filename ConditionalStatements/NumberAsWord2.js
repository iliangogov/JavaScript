/**
 * Created by Gogov on 6/18/2016.
 */

function solve(args) {
    var target = parseInt(args);

    var Digits =
        [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    var TenToTwenty =
        [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];

    var TwentyToNinety =
        [ '','',"twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

    var output='';
    if(target<10){
        output+=Digits[target%10];
    }
    if(target>=10&&target<20){
        output+=TenToTwenty[target%10];
    }
    if(target>=20&&target<100){
        output+=TwentyToNinety[(target/10|0%10)];
        if(target%10!==0){
            output+=' '+Digits[target%10];
        }
    }
    if(target>=100){
        output+=Digits[target/100|0%10]+' hundred';
        if(target%100!==0&&target%100<10){
            output+=' and '+Digits[target%10];
        }
        if(target%100!==0&&target%100>=10&&target%100<20){
            output+=' and '+TenToTwenty[target%10];
        }
        if(target%100!==0&&target%100>19){
            if(target%10===0){
                output+=' and '+TwentyToNinety[(target/10|0)%10];
            }
            else{
                output+=' and '+TwentyToNinety[(target/10|0)%10]+' '+Digits[target%10];
            }
        }
    }

    console.log(output.charAt(0).toUpperCase()+output.slice(1));

}
solve('718');