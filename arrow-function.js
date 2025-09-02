// normal function
function sum(a, b) {
  return a + b;
}
// console.log(sum(5, 6));

// arrow function

const total = (a, b) => a + b;
// console.log(total(4, 5));

const sqrt = (a) => a * a;
// console.log(sqrt(5));

const arrowFunction = () => {
  console.log(this);
};

arrowFunction();

// const myFuncArrow = () => {
//   console.log(this);
// };
// myFuncArrow();
