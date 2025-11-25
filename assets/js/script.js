// 1) Where is carNoise stored?
// Global execution context (GEC)
const Basketball = 'he shoots';
// 2) Where is goFast stored?
// Global execution context (GEC)
const shootThree = score => {
  // 4) When is speed assigned a value? Where is this value stored?
  // When goFast is invoked, the argument of the function is assigned to the parameter, speed, 
  // in the functional execution context of goFast
  // 5) Where is makeNoise stored?
  // makeNoise is stored in the function execution context of goFast
  const makeShot = swish => {
    // carNoise is then assigned to sound in the function execution context of makeNoise
    // console.log is then placed on the call stack which then logs the statement
    console.log(`The game was exiciting ${Basketball},  ${score}`);
  }

  // 6) What happens in the following statement?
  // makeNoise is placed on the call stack which creates a new function execution context
  makeShot(shootThree);
}

// 3) What happens in the following statement?
// Since confirm is a Web API, once it resolves, goFast() is placed in the callback queue, then onto the call stack to be executed.
if(confirm("Do you want to play basketball?")) {
  shootThree(3);
}
