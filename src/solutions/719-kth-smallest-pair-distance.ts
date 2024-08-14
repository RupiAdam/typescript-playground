// https://leetcode.com/problems/find-k-th-smallest-pair-distance/
const smallestDistancePair = (nums: number[], k: number): number => {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const leftCursor = nums[i];
      const rightCursor = nums[j];
      const distance = Math.abs(leftCursor - rightCursor);
      res.push(distance);
    }
  }
  res.sort((a, b) => a - b);

  return res[k-1];
};

export default smallestDistancePair;