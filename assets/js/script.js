// 1) Where is Basketball stored?
// Global execution context (GEC)
const Basketball = 'he shoots';
// 2) Where is shootThree stored?
// Global execution context (GEC)
const shootThree = score => {
  // 4) When is score assigned a value? Where is this value stored?
  // When shootThree is invoked, the argument of the function is assigned to the parameter, score, 
  // in the functional execution context of shootThree
  // 5) Where is makeShot stored?
  // makeShot is stored in the function execution context of ShootThree
  const makeShot = swish => {
    // basketball is then assigned to swish in the function execution context of makeShot
    // console.log is then placed on the call stack which then logs the statement
    console.log(`The game was exiciting ${Basketball},  ${score}`);
  }

  // 6) What happens in the following statement?
  // makeShot is placed on the call stack which creates a new function execution context
  makeShot(shootThree);
}

// 3) What happens in the following statement?
// Since confirm is a Web API, once it resolves, goFast() is placed in the callback queue, then onto the call stack to be executed.
if(confirm("Do you want to play basketball?")) {
  shootThree(3);
}

  function copyCode(btn) {
    const pre = btn.nextElementSibling; // <pre> element
    const text = pre.innerText;

    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add("copied");
      btn.innerText = "Copied!";

      setTimeout(() => {
        btn.classList.remove("copied");
        btn.innerText = "Copy";
      }, 1600);
    });
  }
