export function possible(x:number,y:number,n: number,field: Array<Array<number>>):boolean{
    for(let i=0;i<9;i++){
        if(field[x][i]===n)return false;
        if(field[i][y]===n)return false;
    }
    const xKachel=(Math.floor(x/3))*3;
    const yKachel=(Math.floor(y/3))*3;
    for(let y=0;y<3;y++){
        for(let x=0;x<3;x++){
            if(field[xKachel+x][yKachel+y]===n)return false;
        }
    }
    return true;
}

export function solve(field:Array<Array<number>>){
    for(let y=0;y<9;y++){
        for(let x=0;x<9;x++){
            if(field[x][y]===0){
                for(let i=1;i<10;i++){
                    if(possible(x,y,i,field)){
                        field[x][y]=i;
                        solve(field);
                        field[x][y]=0;
                    }
                }
                return;
            }
        }

    }
    printField(field);
    return;//if you do not return here, the function will check for more solutions
}

export function printField(field:Array<Array<number>>){
    let txt='';
    for(let y=0;y<9;y++){
        for(let x=0;x<9;x++){
            txt+=field[x][y];
        }
        txt+='\n';
    }
    console.log(txt);
}