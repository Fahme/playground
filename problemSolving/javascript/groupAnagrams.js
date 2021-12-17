function groupAnagrams(arr) {
  let wordsMap = {};

  for (const word of arr) {
    const current = word.split("").sort().join();

    if (!wordsMap.hasOwnProperty(current)) {
      wordsMap[current] = [word];
    } else {
      wordsMap[current].push(word);
    }
  }

  for (const [key, value] of Object.entries(wordsMap)) {
    console.log(value);
  }
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
