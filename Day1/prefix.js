function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let current = strs[i];
    let tempPrefix = "";

    for (let j = 0; j < Math.min(prefix.length, current.length); j++) {
      if (prefix[j] === current[j]) {
        tempPrefix += prefix[j];
      } else {
        break;
      }
    }

    prefix = tempPrefix;

    if (prefix === "") {
      return "";
    }
  }

  return prefix;
}

let example1 = ["flower", "flow", "flight"];
let example2 = ["dog", "racecar", "car"];
let example3 = ["interview", "internet", "internal", "interval"];
let example4 = ["apple", "ape", "april"];

console.log(longestCommonPrefix(example1)); 
console.log(longestCommonPrefix(example2)); 
console.log(longestCommonPrefix(example3)); 
console.log(longestCommonPrefix(example4)); 