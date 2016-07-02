/**
 * Created by Gogov on 7/2/2016.
 */
/*function solve(args){
    var NMJ=args[0].split(' ').map(Number);
    var startPos=args[1].split(' ').map(Number);
    var N=NMJ[0];
    var M=NMJ[1];
    var J=NMJ[2];
    var jumpsArr=[];

    for(var i=2;i<=J+1;i+=1){
        jumpsArr.push(args[i]);
    }

    var sum=0;
    var jumps=0;

    function GetMatrixValue(row,col){
        var value=0;
        value=row*M+1+col;
        return value;
    }

    function onField(row,col){
        if(+row>+N||+col>+M||+row<0||+col<0){
            return false;
        }
        return true;
    }


//console.log(GetMatrixValue(3,2));

    var currPosition=startPos;

    console.log((jumpsArr));
    var index=0;

    while(true){

        var currJumpRow=jumpsArr[index].split(' ').map(Number)[0];
        var currJumpCol=jumpsArr[index].split(' ').map(Number)[1];
        currPosition[0]=+currPosition[0]+currJumpRow;
        currPosition[1]=+currPosition[1]+currJumpCol;

        var visited=[];
        visited.push(currPosition);

        if(!onField(+currPosition[0],+currPosition[1])){
            return console.log('escaped',sum);
            break;
        }

        for(var positions in visited) {
            if (+positions.split(' ')[0] === currPosition[0]&&+positions.split(' ')[1]===currPosition[1]) {
                return console.log('caught', jumps);
                break;
            }
        }

        sum+=GetMatrixValue(+currPosition[0],+currPosition[1]);
        jumps+=1;
        index+=1;


    }


}*/

function Solve(args) {

    function inRange(pos, range) {
        return 0 <= pos && pos < range;
    }

    var nmkStr = args[0].split(" ");
    var n = parseInt(nmkStr[0]);
    var m = parseInt(nmkStr[1]);
    var d = parseInt(nmkStr[2]);
    var posStr = args[1].split(" ");
    var row = parseInt(posStr[0]);
    var column = parseInt(posStr[1]);
    var dirsArr = args.slice(2);
    var dirs = [dirsArr.length];
    for (var i = 0; i < dirsArr.length; i++) {
        var dir = dirsArr[i].split(" ");
        dirs[i] = {
            row: parseInt(dir[0]),
            column: parseInt(dir[1])
        }
    }

    var used = {};
    var sum = 0;
    var dir = 0;
    var count = 0;
    while (true) {
        if (!inRange(row, n) || !inRange(column, m)) {
            console.log("escaped " + sum);
            break;
        }
        if (used[row * m + column]) {
            console.log("caught " + count);
            break;
        }
        count++;
        used[row * m + column] = true;
        sum += row * m + column + 1;
        row += dirs[dir].row;
        column += dirs[dir].column;
        dir++;
        dir %= dirs.length;
    }
}

Solve(['6 7 3','0 0', '2 2', '-2 2', '3 -1']);