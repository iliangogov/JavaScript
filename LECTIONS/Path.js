/**
 * Created by Gogov on 7/4/2016.
 */

function solve(args) {
    var rc=args[0].split(' ').map(Number);
    var r=rc[0];
    var c=rc[1];
    var moves=[];
    for(var i=0;i<r;i+=1){
        moves[i]=[];
        for(var j=0;j<c;j+=1){
            moves[i][j]=args[i+1].split(' ')[j];
        }
    }

    var matrix=[];
    var filler=1;
     for(var i=0;i<r;i+=1){
         matrix[i]=[];
         for(var j=0;j<c;j+=1){
             matrix[i][j]=j+filler;
         }
         filler*=2;
     }
    
    var visited=[];
    for(var i=0;i<r;i+=1){
        visited[i]=[];
        for(var j=0;j<c;j+=1){
            visited[i][j]=false;
        }
    }
   // console.log(visited);
    var sum=0;
    var end=false;
    var currRow=0;
    var currCol=0;

    for(var i=0;i<r;i+=1){
        if(end){
            break;
        }
        for(var j=0;j<c;j+=1){

            if(currRow<0||currRow>=r||currCol<0||currCol>=c){
                end=true;
                console.log("successed with "+sum);
                break;
            }
            if(visited[currRow][currCol]===true){
                console.log("failed at ("+currRow+", "+currCol+")");
                end=true;
                break;
            }
            sum+=matrix[currRow][currCol];
            visited[currRow][currCol]=true;

            if(moves[currRow][currCol]==='dr'){
                currRow+=1
                currCol+=1;
                continue;
            }
            if(moves[currRow][currCol]==='dl'){
                currRow+=1
                currCol-=1;
                continue;
            }
            if(moves[currRow][currCol]==='ul'){
                currRow-=1;
                currCol-=1;
                continue;
            }
            if(moves[currRow][currCol]==='ur'){
                currRow-=1;
                currCol+=1;
                continue;
            }
        }
    }
}
solve(['3 5', 'dr dl dr ur ul', 'dr dr ul ur ur', 'dl dr ur dl ur']);