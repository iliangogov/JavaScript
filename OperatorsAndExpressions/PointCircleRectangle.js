/**
 * Created by Gogov on 6/16/2016.
 */
function solve(args) {
    var X = Number(args[0]);
    var Y = Number(args[1]);

    var inCircle = false;
    var inRectangle = false;
    var defaultCircleX=1;
    var defaultCircleY=1;
    var distanceToCircleX = X - defaultCircleX;
    var distanceToCircleY = Y - defaultCircleY;

    var distanceToCircle = Math.sqrt(
        (distanceToCircleX
        * distanceToCircleX)
        + (distanceToCircleY
        * distanceToCircleY));

    
    if (distanceToCircle <= 1.5) {
        inCircle = true;
    }
   
    if (X >= -1 && X <= 5 && Y <= 1 && Y >= -1) {

        inRectangle = true;
    }

    var output = '';
    if (inCircle) {
        output += 'inside circle ';
    } else {
        output += 'outside circle ';
    }

    if (inRectangle) {
        output += 'inside rectangle';
    } else {
        output += 'outside rectangle';
    }

    console.log(output);
}

//solve(['2.5', '1']);