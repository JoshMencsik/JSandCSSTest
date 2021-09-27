
board = document.getElementById("board"); 
var drw = board.getContext("2d");
drw.fillStyle = "white";

function mage() {document.getElementById("charSelect").innerHTML = "==Mage==";}
function knight() {document.getElementById("charSelect").innerHTML = "==Knight==";}
function rogue() {document.getElementById("charSelect").innerHTML = "==Rogue==";}

drw.fillRect(690, 275, 10, 10);
charX = 690;
charY = 275;

document.addEventListener('keydown', logKey);

function logKey(key) {
    if (key.code == 'KeyW') {
        erCurrent();
        charY = charY - 5;
        drw.fillRect(charX,charY,10,10);
    }
    else if (key.code == "KeyS") {
        erCurrent();
        charY = charY + 5;
        drw.fillRect(charX,charY,10,10);
    }
    else if (key.code == "KeyA") {
        erCurrent();
        charX = charX - 5;
        drw.fillRect(charX,charY,10,10);
    }
    else if (key.code == "KeyD") {
        erCurrent();
        charX = charX + 5;
        drw.fillRect(charX,charY,10,10);
    }
    
    //--> log.textContent += key.code; <-- tester of keyinputs
}

function erCurrent() {
    drw.fillStyle="#353535"; //background color
    drw.fillRect(charX, charY, 15, 15);
    drw.fillStyle= "white";
}



