export function medianOfTwoSortedArrays(
  inputArr1: number[],
  inputArr2: number[]
) {
  var mergedArr: number[] = [];
  var idx1: number = 0;
  var idx2: number = 0;
  var curr1: number = inputArr1[idx1];
  var curr2: number = inputArr2[idx2];
  for (let itr = 0; itr < inputArr1.length + inputArr2.length; itr++) {
    if (curr1 < curr2 || idx2 == inputArr2.length) {
      mergedArr.push(curr1);
      curr1 = inputArr1[++idx1];
      continue;
    }
    mergedArr.push(curr2);
    curr2 = inputArr2[++idx2];
  }

  var mergedLen: number = mergedArr.length;
  if (mergedLen % 2 == 0) {
    return (mergedArr[mergedLen / 2 - 1] + mergedArr[mergedLen / 2]) / 2;
  }

  return mergedArr[(mergedLen - 1) / 2];
}
