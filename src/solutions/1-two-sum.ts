const twoSum = (nums: number[], target: number) : number[] => {
  const map: Map<number, number> = new Map();
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const numberNeeded = target - nums[i];
    const indexOfNumberNeeded = map.get(numberNeeded);
    map.set(nums[i], i);

    if(indexOfNumberNeeded !== undefined){
      firstIndex = indexOfNumberNeeded;
      secondIndex = i;
      break;
    }
  }

  return [firstIndex, secondIndex];
}
export default twoSum;