let name = "Topu";
let age = 21;

let person = {
  name,
  age,
  roll: 1,
  getInfo() {
    console.log(`my  is ${this.name}. Age ${this.age} and Roll: ${this.roll}`);
  },
};

// console.log(person);
// person.getInfo();

const keys = Object.keys(person);

// console.log(keys);

const values = Object.values(person);
// console.log(values);

const enteries = Object.entries(person);
// console.log(enteries);

for (const key of keys) {
  //   console.log(key, ":", person[key]);
}

for (const key in person) {
  //   console.log(key, ":", person[key]);
}

// seal, freeze and delete

const obj = {
  country: "Bangladesh",
  color: "Green",
};

// Prevent insert, delete and update
// Object.freeze(obj);

// Prevent insert, delete
Object.seal(obj);

delete obj.color;
obj.country = "India";
obj.color = "yellow";
console.log(obj);
