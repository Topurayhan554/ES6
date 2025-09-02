// let arr = [5, 6, 5, 4, 2, 4, 8, 7, 2];
// console.log(...arr);

const findMax = (...rest) => {
  const mx = Math.max(...rest);
  return mx;
};

console.log(findMax(4, 5, 6, 2, 11, 22, 45, 14, 285));

// objects

const obj = {
  name: "topu",
  age: 21,
};

const obj2 = { ...obj };

obj2.age = 20;
console.log(obj);
console.log(obj2);
