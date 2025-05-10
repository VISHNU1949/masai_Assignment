function checkPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let letter of word.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

module.exports = { checkPalindrome, countVowels };
