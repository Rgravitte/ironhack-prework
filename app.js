// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

// grid visual = [
//   [rover, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null, null, null],
// ]

// ======================
function turnLeft(rover){
  switch(rover["direction"]) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
  console.log("turnLeft was called!");
  console.log(rover.direction);
}

function turnRight(rover){
  switch(rover["direction"]) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called!");
  console.log(rover.direction);
}

function moveForward(rover){
  if(rover.direction === "N" && rover.y > 0) {
    rover.y--;
  }
  else if(rover.direction === "E" && rover.x < 10) {
    rover.x++;
  }
  else if(rover.direction === "S" && rover.y < 10) {
    rover.y++;
  }
  else if(rover.direction === "W" && rover.x > 0) {
    rover.x--;
  }
  else {
    console.log("you have reached the edge of the grid")
  }
    rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
    console.log("moveForward was called");
}

function moveBackwards(rover) {
  if(rover.direction === "N" && rover.y < 10) {
    rover.y++;
  }
  else if(rover.direction === "E" && rover.x > 0) {
    rover.x--;
  }
  else if(rover.direction === "S" && rover.y > 0) {
    rover.y--;
  }
  else if(rover.direction === "W" && rover.x < 10) {
    rover.x++;
  }
  else {
    console.log("you have reached the edge of the grid");
  }
  rover.travelLog.push("[" + rover.x + ", " + rover.y + "]");
}

function command(str) {
  for(var i = 0; i < str.length; i++) {
    if(str[i] !== "l" && str[i] !== "r" && str[i] !== "f" && str[i] !== "b") {
      console.log("Command not recognized");
    }
  }
    for(i = 0; i < str.length; i++) {
      if(str == "l") {
        turnLeft();
        break;
      }
      if(str == "r") {
        turnRight();
        break;
      }
      if(str == "f") {
        moveForward();
        break;
      }
      if(str == "b") {
        moveBackwards();
        break;
      }
    }
    console.log(rover.travelLog);
  }