// pass by value (pass by primitive data types)
const name = "topu";
const myFunc = (value) => {
  value = "rayhan";
  console.log("inside func", value);
};

// myFunc(name);
// console.log("after func call", name);

// pass by reference (pass by non primitive data type)

const obj = {
  name: "Topu",
  age: "20",
};

const objFunc = (obj) => {
  obj.name = "rayhan";
  console.log(`inside function`, obj);
};

objFunc(obj);
console.log("after func call: ", obj);
