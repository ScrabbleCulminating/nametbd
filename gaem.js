
var board = [["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]];
var boardCache = board;
var turn = 1;
var tileBag = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","H","H","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","#", "#"];

const allEqual = arr => arr.every(val => val === arr[0]);

var player1 = {
    tileRack: new Array(8),
    points: 0
    //tileRack: ["A", "A", "A", "A", null, null, "A", "A"] Debug Code for grabbing Tiles
};
var player2 = Object.create(player1);

tileBag = shuffleTiles(tileBag);

console.log(tileBag);   

player1.tileRack = grabTiles(player1.tileRack);
player2.tileRack = grabTiles(player2.tileRack);


var win = 0;
while (win == 0) {


  }

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

//function playTiles()

function checkValid(){
    let valid = new Array();
    let valid1 = new Array();
    for (let i = 0; i < 15; i++){
        for (let j = 0; j < 15; j++){
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
