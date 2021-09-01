"use strict";

const theArray = [0];
let newNumber = 0;

loop();

function loop() {
  newNumber++;
  if (newNumber < 9) {
    theArray.unshift(newNumber);
    console.log(theArray);
    setTimeout(loop, 1000);
  } else {
    theArray.unshift(newNumber);
    theArray.pop([9]);
    console.log(theArray);
    setTimeout(loop, 1000);
  }
}
