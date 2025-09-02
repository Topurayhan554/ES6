// array destructuring
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, two, three, ...all] = arr;
console.log(one, two, three, all);

// object destructuring
const person = {
  name: "Topu ",
  age: 21,
  address: {
    Zilla: "Dinajpur",
    gram: "laxmipur",
  },
};

const {
  name,
  age,
  address: { Zilla, gram },
} = person;
console.log(name, age, Zilla, gram);
