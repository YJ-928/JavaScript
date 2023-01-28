/**
 * Welcome to the Stanford Karel IDE.
 * This code moves Karel the Robot in a diagonal manner and commands it to put 
 * beepers in a Left to Right Diagonal. 5x5 Grid
 **/
function main(){
   putBeeper();
   moving();
   putBeeper();
   moving();
   putBeeper();
   moving();
   putBeeper();
   moving();
   putBeeper();
}

function moving(){
   move();
   turnLeft();
   move();
   turnRight();
}