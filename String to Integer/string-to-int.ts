export function stringToInteger(inputStr: string): number {
  var str: string = inputStr.trim();
  var result: string = "";
  if (str.charAt(0) != "-" && isNaN(Number(str.charAt(0)))) {
    return Number(result);
  }

  result += str.charAt(0);

  for (let idx = 1; idx < str.length; idx++) {
    if (isNaN(Number(str.charAt(idx)))) {
      break;
    }

    result += str.charAt(idx);
  }

  var resultNum: number = Number(result);
  if (resultNum >= 2 ** 31) {
    return 2 ** 31 - 1;
  }
  if (resultNum <= -(2 ** 31)) {
    return -(2 ** 31) + 1;
  }
  return resultNum;
}
