/**
 * Created by Gogov on 7/2/2016.
 */
function solve(args){
    var mn=args[0];
    var m=mn.split(' ').map(Number)[0];
    var n=mn.split(' ').map(Number)[1];
    var rc=args[1];
    var r=rc.split(' ').map(Number)[0];
    var c=rc.split(' ').map(Number)[1];
    var moves=[];
    var sum=0;
    var counter=0;
    
    var matrix=[];
    var filler=1;
    for(var i =0;i<m;i+=1){
        matrix[i]=[];
        for(var j=0;j<n;j+=1){
            matrix[i][j]=filler;
            filler++;
        }
    }

   for (var i=0;i<m;i+=1){
       moves[i]=[];
       for(var j=0;j<n;j+=1){
           moves[i][j]=args[i+2][j];
       }
   }

    var currRow=r;
    var currCol=c;

   /* console.log(matrix);
    console.log(currRow);
    console.log(currCol);
    var score=matrix[currRow][currCol];
    console.log(score);*/
    var lost=false;
    var out=false;

    for(var i=0;i<m;i+=1){
        if(lost||out){
            break;
        }
        for(var j=0;j<n;j+=1){

            if(currRow<0||currRow>=m||currCol<0||currCol>=n){
                console.log('out '+sum);
                out=true;
                break;
            }
            if(matrix[currRow][currCol]==='X'){
                console.log('lost '+counter);
                lost=true;
                break;
            }
            counter++;
            var score=matrix[currRow][currCol];
            sum+=score;
            matrix[currRow][currCol]='X';

            if(moves[currRow][currCol]==='l'){
                currCol-=1;
                continue;
            }
            if(moves[currRow][currCol]==='r'){
                currCol+=1;
                continue;
            }
            if(moves[currRow][currCol]==='u'){
                currRow-=1;
                continue;
            }
            if(moves[currRow][currCol]==='d'){
                currRow+=1;
                continue;
            }

        }
    }


}
solve(["3 4","1 3","lrrd","dlll","rddd"]);

