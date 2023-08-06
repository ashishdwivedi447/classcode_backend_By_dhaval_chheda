const fs = require("fs");  //fs is file system module which comes with node while installing it ecause browser can't handle it.
                          // this allows us to Read and write file

function someAsyncOperation(callback) {
  fs.readFile("abc.txt", callback);    // fs.readfile is async operation and iy will be moved to the call back queue.
}

const timeoutScheduled = Date.now(); // 1646301758201  it's give current time in milisecond from January1,1970
console.log("timeoutScheduled", timeoutScheduled);

setTimeout(() => {
  console.log("now", Date.now());
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);  // it will be moved to timer queue
}, 100);

// do someAsyncOperation which takes 95 ms to complete
const callbackFunction = () => {
  const startCallback = Date.now();
  console.log("startCallback", startCallback);
  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
};
someAsyncOperation(callbackFunction);

// here is explanation ----> line no first will be put into memory and line no 4 will be put into the memory as it is function defination
// and line no 8 will be put into memory after that setTimeout will be pushed into the timer queue then call back function is function defination then it is moved to memory. Now while execution time all thing willbe executed line by line except asynchronuos thing 
 // now here is catch if timer queue and call back queue content is same than callback queue content 
 // will be pushed first in the Ready queue than call back queue. when call back is Ready then then it will be moved into then call stack after executing it it will be removed from the stack and for the setTimeout as well 
 // when Ready queue will be empty then only node will check for the timer queue or call back queue.
 
