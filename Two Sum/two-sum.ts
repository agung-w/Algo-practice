export function twoSum(arr: number[], target: number): number[] {
  for (let itr = 0; itr < arr.length; itr++) {
    for (let idx = itr + 1; idx < arr.length; idx++) {
      if (target - arr[itr] == arr[idx]) {
        return [itr, idx];
      }
    }
  }
  return [-1, -1];
}
