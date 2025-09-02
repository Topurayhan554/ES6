const arr = [12, 13, 5, 10, 20, 30, 40, 50, 60, 70];
const phones = [
  {
    name: "iPhone 14 pro",
    price: 90000,
  },
  {
    name: "iPhone 14 pro",
    price: 92000,
  },
  {
    name: "Google pixel 10 pro",
    price: 95000,
  },
  {
    name: "Motorola G85",
    price: 24000,
  },
  {
    name: "Samsung S25 ultra",
    price: 112500,
  },
  {
    name: "iPhone 16 pro",
    price: 135500,
  },
];

// for loop - just loop iterator

// for (let ar of arr) {
//   console.log(ar);
// }

// forEach - just loop iterator

arr.forEach((item) => console.log(item));

// Map method = update element of an array

const value = arr.map((item) => item + 5);

// console.log(value);

// filter method = filter multiple elements

const adult = arr.filter((item) => item >= 18);
// console.log(adult);

const overPhonePrice = phones.filter((item) => item.price >= 100000);
// console.log(overPhonePrice);

// find method -- find a single elements

const phoneName = phones.find((element) => element.name == "iPhone 14 pro");
// console.log(phoneName);

// reduce

const totalSum = arr.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);
console.log(totalSum);
