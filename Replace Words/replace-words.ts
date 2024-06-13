export function replaceWords(
  inputDict: string[],
  inputSentence: string
): string {
  var words: string[] = inputSentence.split(" ");
  var result = "";
  for (let word of words) {
    for (var idx = 0; idx < inputDict.length; idx++) {
      if (word.slice(0, inputDict[idx].length) == inputDict[idx]) {
        word = inputDict[idx];
        break;
      }
    }
    result += word + " ";
  }
  return result.trim();
}
