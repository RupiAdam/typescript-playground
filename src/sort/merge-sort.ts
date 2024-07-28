const merge = (leftArray: number[], rightArray: number[], array: number[]): void => {
  const leftSize = leftArray.length;
  const rightSize = rightArray.length;
  let i = 0;
  let l = 0;
  let r = 0;

  // check the conditions for merging
  while (l < leftSize && r < rightSize) {
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l];
      i++;
      l++;
    } else {
      array[i] = rightArray[r];
      i++;
      r++;
    }
  }

  while (l < leftSize) {
    array[i] = leftArray[l];
    i++;
    l++;
  }

  while (r < rightSize) {
    array[i] = rightArray[r];
    i++;
    r++;
  }

};

const mergeSort = (array: number[]): void => {
  const { length } = array;
  if (length <= 1) return;

  const middle = Math.floor(length / 2);
  const leftArray: number[] = array.slice(0, middle);
  const rightArray: number[] = array.slice(middle);

  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray, array);
};

export default mergeSort;