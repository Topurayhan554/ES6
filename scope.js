// scope

// global scope

let val = 5;
let total = 0;
for (let i = 1; i <= val; i++) {
  total += i;
}
// console.log(total);

// block scope
// var not maintain block scope

{
  let a = 5;
  var b = 10;
}

// Function scope or Local scope
// var, let and const all are maintaining function scope
const myFunc = () => {
  var test33 = "test 33";
  let test44 = "test 44";
  const test444 = "test 444";

  //   global accidental variable
  test555 = "test 555"; // X bad practice (Not suggested)
};
