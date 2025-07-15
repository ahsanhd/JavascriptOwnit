const palindromeChecker = (string) => {
  const originalString = string;
  const reversedString = string.split("").reduce((acc, char) => {
    return char + acc;
  }, "");

  return originalString.toLowerCase() === reversedString.toLowerCase();
};

console.log("palindrome checker", palindromeChecker("Racecar"));

// gpt clean version

const palindromeChecker_ = (string) => {
  const cleaned = string.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversed = cleaned.split("").reduce((acc, char) => char + acc, "");
  return cleaned === reversed;
};

console.log(palindromeChecker("A man, a plan, a canal: Panama")); // true // unaother comment
