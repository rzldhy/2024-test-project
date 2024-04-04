// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript

https: function topThreeWords(text) {
  // Replace non-alphanumeric characters with whitespace
  const cleanText = text.replace(/[^\w\s']/g, " ");

  // Split the text into an array of words
  const wordsArray = cleanText.toLowerCase().match(/\b[a-z']+\b/g) || [];

  // Create an object to store word frequencies
  const wordFreq = {};
  wordsArray.forEach((word) => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });

  // Sort the words by frequency in descending order
  const sortedWords = Object.keys(wordFreq).sort(
    (a, b) => wordFreq[b] - wordFreq[a]
  );

  // Return the top 3 words (or fewer if less than 3 unique words)
  return sortedWords.slice(0, 3);
}

// Example usage:
const text = "Hello, hello, world. This is a test. Test test test.";
const topWords = topThreeWords(text);
console.log(topWords); // Output: ['test', 'hello', 'this']
