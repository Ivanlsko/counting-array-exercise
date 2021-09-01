"use strict";

const theArray = [0];
let newNumber = 0;

loop();

function loop() {
  newNumber++;
  if (newNumber < 10) {
    theArray.unshift(newNumber);
    console.log(theArray);
    setTimeout(loop, 1000);
  }
}
