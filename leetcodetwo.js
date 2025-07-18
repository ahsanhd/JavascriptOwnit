var gcdOfStrings = function (str1, str2) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };
  if (str1 + str2 !== str2 + str1) return "";

  const baseStringLength = gcd(str1.length, str2.length);

  const commonBaseString = str1.slice(0, baseStringLength);
  return commonBaseString;
};

console.log({ result: gcdOfStrings("ABCABC", "ABC") });
