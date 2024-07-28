import quickSort from './sort/quicksort';
import mergeSort from './sort/merge-sort';
import sortMockData from './__test__/__mock__/sort.mock.data';

const nums = [5,2,3,1];
quickSort(nums, 0, nums.length - 1);

console.log(nums);

const sampleArray = sortMockData.nums;
mergeSort(sampleArray);

console.log(sampleArray);