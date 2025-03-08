function solution(n, x) {
  let i = x;
  let nums = [];
  while (nums.length < n) {
    if ((x&i) === x) {
      nums = [...nums, i];
    }
    i++;
  }
  return nums;
}

console.log(solution(4, 2));
