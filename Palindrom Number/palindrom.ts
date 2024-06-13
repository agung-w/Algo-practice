export function isPalindrom(inputNum: number): boolean {
  var strNum: string = inputNum.toString();
  var midIdx =
    strNum.length % 2 == 0 ? strNum.length / 2 : (strNum.length - 1) / 2;
  for (let idx = 0; idx < midIdx; idx++) {
    if (strNum.charAt(idx) != strNum.charAt(strNum.length - idx - 1)) {
      return false;
    }
  }
  return true;
}
