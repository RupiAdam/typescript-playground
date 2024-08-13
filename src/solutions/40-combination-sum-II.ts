const twoSum2 = (candidates: number[], target: number): number[][] => {
  const res: number[][] = [];
  candidates.sort((a, b) => a - b);

  const dfs = (i: number, currCombination: number[], totalCombination: number) => {

    if(totalCombination === target) {
      // we need a shallow copy instead directly push the array,
      // since the currCombination gonna change every time
      res.push([...currCombination]);
      return;
    }

    if(totalCombination > target || i === candidates.length)
      return;

    // include the repetitive number
    currCombination.push(candidates[i]);
    dfs(i + 1, currCombination, totalCombination + candidates[i]);
    currCombination.pop();

    // skip the repetitive number
    // these two will prevent duplication
    while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]){
      i++;
    }

    // since we're skipping the element, we don't need to update the total combination
    dfs(i + 1, currCombination, totalCombination)

  };

  dfs(0, [], 0);
  return res;
};

export default twoSum2;
