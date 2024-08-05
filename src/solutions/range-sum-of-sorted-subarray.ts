// the question can be accessible from here: https://leetcode.com/submissions/detail/1344331072/

const generateSubArray = (arr: number[]): number[] => {
  let previous = 0;
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + previous);
    previous += arr[i];
  }

  return result;
};

const rangeSum = (nums: number[], _: number, left: number, right: number): number => {
  let result = 0;
  const subArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const a = generateSubArray(nums.slice(i, nums.length));
    subArray.push(...a);
  }

  subArray.sort((a, b) => a - b);

  for (let i = left - 1; i < right; i++) {
    result = (result + subArray[i]) % 1000000007;
  }

  return result;
};

export default rangeSum;