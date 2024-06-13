export function pow(x: number, n: number): number {
  if (n == 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n *= -1;
  }
  return powRec(x, x, n - 1);
}

function powRec(res: number, x: number, n: number): number {
  if (n == 0) {
    return res;
  }
  return powRec(Number((res * x).toFixed(5)), x, n - 1);
}
