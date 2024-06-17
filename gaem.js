var board = [["3W","","2L","","","","","3W","","","","","2L","","3W"], ["","2L","","","","","3L","","3L","","","","","2L",""], ["2L","","","","","2W","","","","2W","","","","","2L"], ["","","","","2W","","","","","","2W","","","",""], ["","","","2W","","","","","","","","2W","","",""], ["","","2W","","","","2L","","2L","","","","2W","",""], ["","3L","","","","2L","","","","2L","","","","3L",""], ["3W","","","","","","","2W","","","","","","","3W"], ["","3L","","","","2L","","","","2L","","","","3L",""], ["","","2W","","","","2L","","2L","","","","2W","",""], ["","","","2W","","","","","","","","2W","","",""], ["","","","","2W","","","","","","2W","","","",""], ["2L","","","","","2W","","","","2W","","","","","2L"], ["","2L","","","","","3L","","3L","","","","","2L",""], ["3W","","2L","","","","","3W","","","","","2L","","3W"]];
var boardCache = [["3W","","2L","","","","","3W","","","","","2L","","3W"], ["","2L","","","","","3L","","3L","","","","","2L",""], ["2L","","","","","2W","","","","2W","","","","","2L"], ["","","","","2W","","","","","","2W","","","",""], ["","","","2W","","","","","","","","2W","","",""], ["","","2W","","","","2L","","2L","","","","2W","",""], ["","3L","","","","2L","","","","2L","","","","3L",""], ["3W","","","","","","","2W","","","","","","","3W"], ["","3L","","","","2L","","","","2L","","","","3L",""], ["","","2W","","","","2L","","2L","","","","2W","",""], ["","","","2W","","","","","","","","2W","","",""], ["","","","","2W","","","","","","2W","","","",""], ["2L","","","","","2W","","","","2W","","","","","2L"], ["","2L","","","","","3L","","3L","","","","","2L",""], ["3W","","2L","","","","","3W","","","","","2L","","3W"]];
var turn = 1;
var tileBag = ["A","A","A","A","A","A","A","A","A","B","B","C","C","D","D","D","D","E","E","E","E","E","E","E","E","E","E","E","E","E","F","F","G","G","G","H","H","H","H","I","I","I","I","I","I","I","I","J","K","L","L","L","L","M","M","N","N","N","N","N","N","O","O","O","O","O","O","O","O","P","P","Q","R","R","R","R","R","R","S","S","S","S","T","T","T","T","T","T","U","U","U","U","V","V","W","W","X","Y","Y","Z","#", "#"];

allEqual = arr => arr.every(val => val === arr[0]);

var player1 = {
    tileRack: new Array(8),
    cache: new Array(8),
    points: 0
    //tileRack: ["A", "A", "A", "A", null, null, "A", "A"] Debug Code for grabbing Tiles
};
var player2 = Object.create(player1);
var selected = {
    tile: "0",
    cache: ""
}


var whosTurn = 1;

tileBag = shuffleTiles(tileBag);

player1.tileRack = grabTiles(player1.tileRack);
player2.tileRack = grabTiles(player2.tileRack);
player1.cache = player1.tileRack;
player2.cache = player2.tileRack;

var win = 0;
function play() {

    checkValid();
    points();

}



//playTiles(prompt("bebap"));
console.log(board);
console.log(checkValid());
console.log(player1.tileRack);
/*for (i=0;i<8;i++){
    const elem = document.getElementById("pt"+(i+1));
    elem.textContent = player1.tileRack[i];
}*/

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

function points() {
    let words = new Array();
    for (i =0; i<15;i++){
        for (j=0;j<15;j++){
            if (board[i][j] != boardCache[i][j]){
                let word = "";
                for (v=0;v<15;v++){
                    if (board[i][v] != "0" && board[i][v] != "2L" && board[i][v] != "2W" && board[i][v] != "3L" && board[i][v] != "3W"){
                        word += board[i][v];
                    }
                    
                }
            }
            words.push(word);   
            if (board[j][i] != boardCache[j][i]){
                let word = "";
                for (v=0;v<15;v++){
                    if (board[j][v] != "0" && board[j][v] != "2L" && board[j][v] != "2W" && board[j][v] != "3L" && board[j][v] != "3W"){
                        word += board[j][v];
                    }
                }
            }
            words.push(word);
        }   
        
    }
    words = words.filter((wordl) => wordl.length > 1);
    console.log(words);
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
    const index = button; 
    const position = index.split(" ");
    
    const elem = document.getElementById(button);
    
    let elemTemp = elem.textContent;
    selected.tile = 
    //board[position[0]][position[1]] = selected.tile;
    console.log(board);
    console.log(boardCache);


    //if (position[0] == "r" || board[position[0]][position[1]] == boardCache[position[0]][position[1]]){
        //select(button);
    //}
    
    //selected.tile = board[position[0]][position[1]];
    //elem.textContent = board[position[0]][position[1]];
}

function select(button){
    const elem = document.getElementById(button);
    selected.tile = elem.textContent;
    elem.style.backgroundColor = 'red';
    //selected.rackPos.splice(0, 0, button);
    document.getElementById("Selected").textContent = selected.tile;
}


function boardLoad(){
    const gridContainer = document.getElementById('board');
    const gridContainer2 = document.getElementById('rak');
    document.getElementById("board").innerHTML = "";
    document.getElementById("rak").innerHTML = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
        // Create a grid item element
        const gridItem = document.createElement('button');
        gridItem.className = 'grid-item';
        gridItem.id = i+' '+j;
        gridItem.textContent = boardCache[i][j];
        switch(boardCache[i][j]){
            case "3W": gridItem.style.backgroundColor = 'red';
            break;
            case "3L": gridItem.style.backgroundColor = 'cyan';
            break;
            case "2L": gridItem.style.backgroundColor = 'lightblue';
            break;
            case "2W": gridItem.style.backgroundColor = 'pink';
            break;
        }
        gridItem.onclick = function(){moveTiles(this.id)};
        gridItem.ondblclick = function(){putBack(this.id)};

        // Append the grid item to the grid container
        gridContainer.appendChild(gridItem);
        }
    }
    console.log(gridContainer2);
    for (i=0;i<8;i++){
        const rackItem = document.createElement('button');
        rackItem.className = 'grid-item';
        rackItem.id = "r " + i;
        rackItem.textContent = player1.tileRack[i];
        rackItem.onclick = function(){moveTiles(this.id)};
        rackItem.oninput = function(){
            const elem = document.getElementById(this.id);
            const index = this.id; 
            const position = index.split(" ");
            elem.textContent = tileRack[position[1]];
        };
        gridContainer2.appendChild(rackItem);
    }
    const selectb = document.createElement('button')
    selectb.className = "grid-item";
    selectb.id = "Selected";
    gridContainer2.appendChild(selectb);
    gridContainer2.appendChild(document.createElement('button',{    textContent: "Reset"}))

    /*for (i=0;i<8;i++){
        const elem = document.getElementById("r"+i);
        elem.textContent = player1.tileRack[i];
        elem.onclick = function(){select(this.id)};
    }*/
}

/*function putBack(button){
    const index = button;
    let elem = document.getElementById(button);
    let elemR = document.getElementById(selected.rackPos[0]);
    elemR.textContent = selected.tile; 
    selected.rackPos.splice(0, 1);
    const position = index.split(" ");
    
    elem.textContent = boardCache[position[0]][position[1]];
    selected.tile = board[position[0]][position[1]];
    document.getElementById("Selected").textContent = selected.tile;  
}*/