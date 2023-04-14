/**
 * Welcome to the Stanford Karel IDE.
 * This code moves the Karel the robot, in a L-Pattern making it move from
 * Bottom-Left to Top-Right Corner. 5x5 Grid
 **/
function main(){
   moving();
   turnLeft();
   moving();
   turnRight();
}

function moving(){
   move();
   move();
   move();
   move();
}