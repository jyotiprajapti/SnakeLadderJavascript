
let move = 0;
flag =false;
let number = 0;
let tempPosition = 0;
let movePosition = 0;
let diceroll = 0;
let player1Position = 0;
let player2Position =0;
const getPlayerPosition = (position)=>{
    number = Math.floor((Math.random()*7)+1);
    diceroll++;
    move = Math.floor((Math.random()*4)+1);
    function checkPosition(tempPositio){
        if(tempPosition<=100){
            position = tempPosition;
        }else{
            position = position;
        }
    }
    switch(move){
        case 1:
            tempPosition = position+number;
            checkPosition(tempPosition)
            break;
        case 2: 
            movePosition = Math.floor((Math.random()*101)+1);
             tempPosition = position+movePosition;
             checkPosition(tempPosition)
            break;
        case 3:
            movePosition = Math.floor((Math.random()*101)+1);
            tempPosition = position-movePosition;
            if(tempPosition>=0){
                position = tempPosition;
            }else{
                position = 0;
            }
            break;
    }
    return position;
 }

do{
    player1Position = getPlayerPosition(player1Position);
    console.log(player1Position+" player 1");
    player2Position = getPlayerPosition(player2Position);
    console.log(player2Position+" player2");
    if( player1Position===100){
        flag =true;
        console.log("Player 1 has won");
    }else if(player2Position===100){
        flag =true;
        console.log("Player 2 has won");
    }
}while(!flag);
