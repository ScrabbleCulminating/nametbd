var board = [["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]];
var boardCache = [["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]];
var turn = 1;
var tileBag = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","H","H","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","#", "#"];

allEqual = arr => arr.every(val => val === arr[0]);

var player1 = {
    tileRack: new Array(8),
    points: 0
    //tileRack: ["A", "A", "A", "A", null, null, "A", "A"] Debug Code for grabbing Tiles
};
var player2 = Object.create(player1);
var selected = "0";
tileBag = shuffleTiles(tileBag);

player1.tileRack = grabTiles(player1.tileRack);
player2.tileRack = grabTiles(player2.tileRack);


var win = 0;
/*while (win == 0) {


}*/



//playTiles(prompt("bebap"));
console.log(board);
console.log(checkValid());


function shuffleTiles(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function grabTiles(array) {
    for(var i = 0; i < 8; i++){
        if (array[i] == null){
            array[i] = tileBag[0];
            tileBag.splice(0,1);
        }
    }
    return array;
}

function playTiles(input){
    let check = Array.from(input);
    console.log(check);
    for (v = 0; v < check.length; v+=3){
        for (i = 0; i < 3; i ++){
        if (i == 1)
        var x = check[v+i];
        if (i == 2)
        var y = check[v+i];
        if (i == 0)
        var c = check[v+i];
        }
    
    board[x][y] = String(c);
    }

}

function checkValid(){
    let valid = new Array();
    let valid1 = new Array();
    for (let i = 0; i < 15; i++){
        for (let j = 0; j < 15; j++){
            if(board[i][j] != "0" && board[i][j] == boardCache[i][j])
            valid.push(3924893); //stupid
            if(board[i][j] != boardCache[i][j]){
                valid.push(i);
                valid1.push(j);
            }
        }
    }
    if (allEqual(valid) != allEqual(valid1)){
        return true;
    }
    return false;
}

function moveTiles(button){
    console.log(button);
    const index = button; 
    const position = index.split(" ");
    board[position[0]][position[1]] = selected;
    const elem = document.getElementById(button);
    elem.textContent = "hehehehaw";

}