const greet = (name, msg, greetMsg) => {
  console.log(`Hi, ${name}`);
  greetMsg(msg);
};

const msgFunction = (msg) => {
  console.log(`Rayhan ${msg}`);
};

greet("Topu", "Hello", msgFunction);
