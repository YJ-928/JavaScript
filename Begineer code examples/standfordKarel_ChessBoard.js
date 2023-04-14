/**
 * Welcome to the Stanford Karel IDE.
 * This code moves Karel the Robot & commands it to 
 * put beeper's in a ChessBoard Manner. 5x5 Grid
 **/
function main(){
   beepRight();
   upFromRight();
   beepLeft();
   upFromLeft();
   beepRight();
   upFromRight();
   beepLeft();
   upFromLeft();
   beepRight();
}

function beepRight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function upFromRight(){
   turnLeft();
   move();
   turnLeft();
}

function beepLeft(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

function upFromLeft(){
   turnRight();
   move();
   turnRight();
}