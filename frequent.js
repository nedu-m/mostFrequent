// Code from thinkful.com

function getToken(rawString) {
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function mostFrequentWord(text) {
  var words = getTokens(text);
  var wordFrequencies = {};
  for (var i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }
  var currentMax = Object.keys(wordFrequencies)[0];
  var currentMaxCount = wordFrequencies[currentMaxCount];

  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey;
}