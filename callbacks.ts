const greetAndGoodbye = (name: string, byebye) => {
  console.info(`Hello ${name}`);

  byebye();
};

const byebye = () => {
  console.info("Bye bye ");
};

greetAndGoodbye("Ahsan", byebye);

setTimeout(() => {
  console.info("1");
}, 1000);

/* Next promises and aysnc await where callbacks really shine    b
 */
