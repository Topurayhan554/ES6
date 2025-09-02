class Student {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }
  getInfo() {
    console.log(`Name: ${this.name}, Roll: ${this.roll}, Marks: ${this.marks}`);
  }
}

// inheritance
class bestStudent extends Student {
  constructor(name, roll, marks, achievement) {
    super(name, roll, marks);
    this.achievement = achievement;
  }
  showAchievement() {
    console.log(`Name :${this.name} achievement is ${this.achievement}`);
  }
}

const s1 = new Student("topu", 4, 56);
const bestSt = new bestStudent("Rayhan", 5, 88, "Developer");
s1.getInfo();
bestSt.getInfo();
bestSt.showAchievement();
