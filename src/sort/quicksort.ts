const partition = (nums: number[], start: number, end: number): number => {
  const pivot = nums[end];
  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    if (nums[j] < pivot) {
      i++;
      const tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    }
  }

  i++;
  const tmp = nums[i];
  nums[i] = nums[end];
  nums[end] = tmp;


  return i;
}

const quickSort = (nums: number[], start: number, end: number): void => {
  if (end <= start) return;

  const pivot = partition(nums, start, end);
  quickSort(nums, start, pivot - 1);
  quickSort(nums, pivot + 1, end);
}
export default quickSort;