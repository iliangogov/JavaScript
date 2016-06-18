/**
 * Created by Gogov on 6/18/2016.
 */

function solve(args) {
  var  a = args[0]*1;
  var  b = args[1]*1;
   var c = args[2]*1;


    if (a === 0) {
        console.log("x = " + (-c / b).toFixed(2));
    }
    else {
        var discriminant = ((b * b) - (4 * a * c));


        if (discriminant === 0) {
            console.log("x1=x2=" + (-b / (2 * a)).toFixed(2));
        }
        else if (discriminant < 0) {
            console.log("no real roots");
        }
        else if (discriminant > 0) {
            var output='x1='+((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2)+';';
            output+=" x2=" +((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2) ;
            console.log(output);
        }
    }
}
solve(['2','5','-3']);