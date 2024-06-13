export function zigZagConversion(inputStr: string, rowNum: number): string {
  var result: string = "";
  const step = rowNum * 2 - 2;
  for (let row = 0; row < rowNum; row++) {
    for (let idx = row; idx < inputStr.length; idx += step) {
      result += inputStr[idx];
      if (
        row != 0 &&
        row != rowNum - 1 &&
        idx + step - 2 * row < inputStr.length
      ) {
        result += inputStr[idx + step - 2 * row];
      }
    }
  }
  return result;
}
