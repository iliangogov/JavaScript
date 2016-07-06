/**
 * Created by Gogov on 7/5/2016.
 */
function solve(args){
    var rc=args[0].split(' ').map(Number);
    var r=rc[0];
    var c=rc[1];
    var initialCoord=args[1].split(';');
    var Wrc=initialCoord[0].split(' ').map(Number);
    var Wr=Wrc[0];
    var Wc=Wrc[1];
    var Nrc=initialCoord[1].split(' ').map(Number);
    var Nr=Nrc[0];
    var Nc=Nrc[1];
    var Lrc=initialCoord[2].split(' ').map(Number);
    var Lr=Lrc[0];
    var Lc=Lrc[1];
    var moves=[];
    var counter=2;
    while(args[counter]){
        moves[counter-2]=args[counter];
        counter+=1;
    }

    var movesCount=moves.length;

    var matrix=[];
    for(var i=0;i<r;i+=1){
        matrix[i]=[];
        for(var j=0;j<c;j+=1){
            matrix[i][j]=false;
        }
    }

    var WisFree=true;
    var NisFree=true;

  //console.log(Math.abs(3-2));


    for(i=0;i<movesCount;i+=1){
        var currComands=moves[i].split(' ');
        
        if(currComands[0]==="lay"){
            matrix[Lr][Lc]=true;
        }else{

            if(currComands[1]==="Lsjtujzbo"){
                if(currComands[2]==="u"){
                   if(Lr-1>=0){
                       Lr-=1;
                   }
                }
                if(currComands[2]==="d"){
                    if(Lr+1<r){
                        Lr+=1;
                    }
                }
                if(currComands[2]==="l"){
                    if(Lc-1>=0){
                        Lc-=1;
                    }
                }
                if(currComands[2]==="r"){
                    if(Lc+1<c){
                        Lc+=1;
                    }
                }
            }

            if((currComands[1]==="Wboup")&&(WisFree===true)){
                if(currComands[2]==="u"){
                    if(Wr-1>=0){
                        Wr-=1;
                    }
                }
                if(currComands[2]==="d"){
                    if(Wr+1<r){
                        Wr+=1;
                    }
                }
                if(currComands[2]==="l"){
                    if(Wc-1>=0){
                        Wc-=1;
                    }
                }
                if(currComands[2]==="r"){
                    if(Wc+1<c){
                        Wc+=1;
                    }
                }

            }

            if((currComands[1]==="Nbslbub")&&(NisFree)){
                if(currComands[2]==="u"){
                    if(Nr-1>=0){
                        Nr-=1;
                    }
                }
                if(currComands[2]==="d"){
                    if(Nr+1<r){
                        Nr+=1;
                    }
                }
                if(currComands[2]==="l"){
                    if(Nc-1>=0){
                        Nc-=1;
                    }
                }
                if(currComands[2]==="r"){
                    if(Nc+1<c){
                        Nc+=1;
                    }
                }

            }

            if((Math.abs(Wr-Lr)<2)&&(Math.abs(Wc-Lc)<2)){
                console.log("The trolls caught Lsjtujzbo at "+Lr+' '+Lc);
                break;
            }
            if(((Math.abs(Nr-Lr)<2)&&(Math.abs(Nc-Lc)<2))){
                console.log("The trolls caught Lsjtujzbo at "+Lr+' '+Lc);
                break;
            }
            if(((WisFree===false)&&(NisFree===false))||(Lr===r-1&&Lc===c-1)){
                console.log("Lsjtujzbo is saved! "+Wr+' '+Wc+' '+Nr+' '+Nc);
                break;
            }

            if(matrix[Wr][Wc]===true){
                WisFree=false;
            }
            if(matrix[Nr][Nc]===true){
                NisFree=false;
            }
            if((Wr===Nr)&&(Wc===Nc)){
                matrix[Wr][Wc]=false;
                NisFree=true;
                WisFree=true;
            }

        }
    }
}
solve(['5 5',
    '1 1;0 1;2 3',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d']);
/*
solve(['7 7',
    '0 1;0 2;3 3',
    'mv Lsjtujzbo l',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo r',
    'lay trap',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup l',
    'mv Wboup l',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Nbslbub d',
    'mv Lsjtujzbo d',
    'mv Lsjtujzbo l',
    'mv Lsjtujzbo l',
    'mv Nbslbub l',
    'mv Nbslbub d',
    'mv Nbslbub d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo d',
    'mv Wboup d',
    'mv Wboup d',
    'mv Wboup r',
    'mv Lsjtujzbo r',
    'mv Lsjtujzbo r']);*/
