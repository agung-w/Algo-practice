export function reverseInteger(inputNum: number): number {
  var arrNum: string[] = inputNum.toString().split("");
  var prefix: string = "";

  if (arrNum[0] == "-") {
    prefix = "-";
    arrNum.shift();
  }

  var result: string = "";
  for (let idx = arrNum.length - 1; idx >= 0; idx--) {
    var num = arrNum[idx];
    if (result == "" && num == "0") {
      continue;
    }
    result += num;
  }
  return Number(prefix + result);
}
