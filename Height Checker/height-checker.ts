export function heightChecker(inputHeight: number[]): number {
  var height: number[] = [...inputHeight];
  var sortedHeight: number[] = inputHeight.sort();
  var result: number = 0;
  console.log(height);
  for (let idx = 0; idx < height.length; idx++) {
    if (height[idx] != sortedHeight[idx]) {
      result++;
    }
  }
  return result;
}
