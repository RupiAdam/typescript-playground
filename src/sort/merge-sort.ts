const merge = (leftArray: number[], rightArray: number[], array: number[]) => {
  const leftSize = array.length / 2;
  const rightSize = array.length - leftSize;
  let i = 0;
  let l = 0;
  let r = 0;

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

  while (l < leftSize){
    array[i] = leftArray[l];
    i++;
    l++;
  }

  while (r < rightSize){
    array[i] = rightArray[r];
    i++;
    r++;
  }

};

const mergeSort = (array: number[]): void => {
  const { length } = array;
  if (length <= 1) return;

  const middle = Math.floor(length / 2);
  const leftArray: number[] = new Array<number>(middle);
  const rightArray: number[] = new Array<number>(length - middle);

  let i = 0;
  let j = 0;

  for (; i < length; i++) {
    if (i < middle) {
      leftArray[i] = array[i];
    } else {
      rightArray[j] = array[i];
      j++;
    }
  }

  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray, array);
};

export default mergeSort;