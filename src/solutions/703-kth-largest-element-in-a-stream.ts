// https://leetcode.com/problems/kth-largest-element-in-a-stream

class KthLargest {
  k: number = 0;
  nums: number[] = [];

  constructor(k: number, nums: number[]) {
    this.k = k;
    nums.sort((a, b) => b - a);
    this.nums = nums.slice(0, k);
  }

  add(val: number): number {
    const kthLargestNumber = this.nums[this.nums.length - 1];
    if (this.nums.length >= this.k && val < kthLargestNumber) return kthLargestNumber;

    this.nums.push(val);
    this.nums.sort((a, b) => b - a);

    if (this.nums.length > this.k) {
      this.nums.pop();
    }

    return this.nums[this.nums.length - 1];
  }

}

export default KthLargest;