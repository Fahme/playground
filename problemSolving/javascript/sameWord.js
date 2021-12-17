function isSameContiguesWord(s1, s2) {
  let first = s1[0];
  let second = s2[0];

  for (const char of s1) {
    if (first[first.length - 1] !== char) {
      first += char;
    }
  }

  for (const char of s2) {
    if (second[second.length - 1] !== char) {
      second += char;
    }
  }

  return first === second;
}

sameWord("Geeks", "Geks");
