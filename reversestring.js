// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

const reverseString = (string) => {
  let rArray = [];
  const straightArray = string.split("");
  for (let i = straightArray.length; i >= 0; i--) {
    rArray.push(straightArray[i - 1]);
  }
  return rArray.join("");
};
const result = reverseString("Ahsan");

console.log({ result_: result });
// using reduce methoh
const reverseString_ = (string) => {
  return string.split("").reduce((acc, char) => {
    return char + acc;
  }, "");
};

console.log("reversed string", reverseString_("ahsan"));

const reccursiveReverseString = (string) => {
  if (string === "") return "";
  return reverseString(string.slice(1)) + string[0];
};

console.log(reverseString("foo")); // "oof"
