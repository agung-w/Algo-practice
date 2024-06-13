export function longestPalindrom(inputStr: string): string {
  var longest = "";
  for (let start = 0; start < inputStr.length; start++) {
    for (let end = inputStr.length; end > 0; end--) {
      var word: string = inputStr.substring(start, end);
      console.log(word);
      if (word.length > longest.length && isPalindrom(word)) {
        longest = word;
      }
    }
  }
  return longest;
}

function isPalindrom(word: string): boolean {
  var midIdx = word.length % 2 == 0 ? word.length / 2 : (word.length - 1) / 2;
  for (let idx = 0; idx < midIdx; idx++) {
    if (word.charAt(idx) != word.charAt(word.length - idx - 1)) {
      return false;
    }
  }
  return true;
}
