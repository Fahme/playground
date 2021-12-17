function common(s1, s2) {
  const firstStringCharsFreq = {};
  let results = {};

  for (const currentString of s1) {
    if (!firstStringCharsFreq.hasOwnProperty(currentString)) {
      firstStringCharsFreq[currentString] = 1;
    }
  }

  for (const currentString of s2) {
    if (
      firstStringCharsFreq.hasOwnProperty(currentString) &&
      !results.hasOwnProperty(currentString)
    ) {
      results[currentString] = 1;
    }
  }

  return results;
}

console.log(common("geeksforgeeks", "platformforgeeks"));
