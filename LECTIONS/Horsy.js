/**
 * Created by Gogov on 7/1/2016.
 */
function solve(args) {
   /* 'use strict';
    var sizes = args[0].split(' ').map(Number),
        field = args.slice(1).map(function (row) {
            return row.split('').map(Number);
        }),
        rows = sizes[0],
        cols = sizes[1],
        row = rows - 1,
        col = cols - 1,
        used = {},
        jumps,
        sum,
        directions = [{}, {
            row: -2,
            col: 1
        }, {
            row: -1,
            col: 2
        }, {
            row: 1,
            col: 2
        }, {
            row: 2,
            col: 1
        }, {
            row: 2,
            col: -1
        }, {
            row: 1,
            col: -2
        }, {
            row: -1,
            col: -2
        }, {
            row: -2,
            col: -1
        }, ];
    var line = [];
    for (var c = 0; c < cols; c += 1) {
        var value = c.toString();
        while (value.length < 5) {
            value = ' ' + value;
        }
        line.push(value);
    }
    function getValue(row, col) {
        return (1 << row) - col;
    }

    function hash(row, col, cols) {
        return row * cols + col;
    }

    function inRange(value, border) {
        return 0 <= value && value < border;
    }

    jumps = 0;
    sum = 0;
    while (true) {
        if (used[hash(row, col, cols)]) {
            return 'Sadly the horse is doomed in ' + jumps + ' jumps';
        }
        if (!inRange(row, rows) || !inRange(col, cols)) {
            return 'Go go Horsy! Collected ' + sum + ' weeds';
        }

        used[hash(row, col, cols)] = true;

        jumps++;
        sum += getValue(row, col);

        var dirIndex = field[row][col],
            dir = directions[dirIndex];

        row += dir.row;
        col += dir.col;
    }*/
    var rc=args[0].split(' ').map(Number);
    var r=rc[0];
    var c=rc[1];

    var moves=[];
    for(var i=0;i<r;i+=1){
        moves[i]=[];
        for(var j=0;j<c;j+=1){
            moves[i][j]=+args[i+1][j];
        }
    }
    var matrix=[];
    var filler=1;

    for(var i =0;i<r;i+=1) {
        matrix[i] =[];
        for(var j=0;j<c;j+=1){
            matrix[i][j]=+filler;
            filler--;
        }
        filler=Math.pow(2,i+1);
    }
  // console.log(moves);

    var currRow=r-1;
    var currCol=c-1;
    var sum=0;
    var counter=0;
    var ended=false;

    for(var i=0;i<r;i+=1){
        if(ended){
            break;
        }
        for(var j=0;j<c;j+=1){
            if(currRow>=r||currRow<0||currCol>=c||currCol<0){
                console.log("Go go Horsy! Collected "+sum+" weeds");
                ended=true;
                break;
            }
            if(matrix[currRow][currCol]==='X'){
                console.log( "Sadly the horse is doomed in "+counter+" jumps");
                ended=true;
                break;
            }
            counter++;
            sum+=matrix[currRow][currCol];
            matrix[currRow][currCol]='X';
            
            if(moves[currRow][currCol]===1){
                currRow-=2;
                currCol+=1;
                continue;
            }
            if(moves[currRow][currCol]===2){
                currRow-=1;
                currCol+=2;
                continue;
            }
            if(moves[currRow][currCol]===3){
                currRow+=1;
                currCol+=2;
                continue;
            }
            if(moves[currRow][currCol]===4){
                currRow+=2;
                currCol+=1;
                continue;
            }
            if(moves[currRow][currCol]===5){
                currRow+=2;
                currCol-=1;
                continue;
            }
            if(moves[currRow][currCol]===6){
                currRow+=1;
                currCol-=2;
                continue;
            }
            if(moves[currRow][currCol]===7){
                currRow-=1;
                currCol-=2;
                continue;
            }
            if(moves[currRow][currCol]===8){
                currRow-=2;
                currCol-=1;
            }
            

        }
    }

}
solve(['3 5',
    '54361',
    '43326',
    '52188',
]);