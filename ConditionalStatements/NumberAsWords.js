/**
 * Created by Gogov on 6/18/2016.
 */

function solve(args) {
    args = parseInt(args);
    var Units =
        [ "", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    var Decimals =
        [ "", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];

    var Hundreds =
        [ "", "one", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];



    function getHundreds(args) {
        if (args >= 100) {
            return Units[Math.floor(args / 100) + 1] + " hundred";
        }

        return "";
    }

    function getDecimals(args) {
        if (args > 9 && args < 20) {
            return Decimals[Math.floor(args % 10 + 1)];
        }
        else if (args % 100 >= 10 && args % 100 <= 19) {
            if (args / 100 > 0) {
                return " and " + Decimals[Math.floor(Math.abs(10 - args % 100) + 1)];
            }
            else {
                return Decimals[Math.floor(args / 10 % 10)];
            }
        }
        else if (args > 100 && args % 100 != 0 && args / 10 % 10 !== 0) {
            return " and " + Hundreds[Math.floor(args / 10 % 10)];
        }
        else {
            return Hundreds[Math.floor(args / 10 % 10)];
        }
    }

    function getUnits(args) {
        if (args < 10) {
            return Units[Math.floor(args % 10 + 1)];
        }
        else if (args / 10 % 10 >= 2 && args <= 100 && args % 10 !== 0) {
            return " " + Units[Math.floor(args % 10 + 1)];
        }
        else if (args > 100 && args / 10 % 10 >= 2 && args % 10 !== 0) {
            return " " + Units[Math.floor(args % 10 + 1)];
        }
        else if (args > 100 && args % 100 < 10 && args % 10 !== 0) {
            return Units[Math.floor(args % 10 + 1)];
        }

        return "";
    }

    var output=(''+getHundreds(args))+(''+getDecimals(args))+(''+getUnits(args));
    console.log(output.charAt(0).toUpperCase()+output.slice(1));
}

solve(718)