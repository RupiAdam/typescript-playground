interface QueueItem {
  index: number;
  jumps: number;
}

const getNextIndex = (currentIndex: number, jump: number, n: number): number =>
  (currentIndex + jump + n) % n; // (3 - 6 + 5) % 5 => 2

function ArrayChallenge(arr: number[]): number {
  const n = arr.length;
  const maxVal = Math.max(...arr);
  const startIndex = arr.indexOf(maxVal);

  // BFS to find the shortest path back to the starting index
  const queue: QueueItem[] = [{ index: startIndex, jumps: 0 }];
  const visited: boolean[] = Array(n).fill(false);
  visited[startIndex] = true; // [false, false, false, true, false]


  while (queue.length > 0) {
    const { index, jumps } = queue.shift()!; // remove queue
    const jumpDistance = arr[index];

    // try left and right node
    // eslint-disable-next-line no-restricted-syntax
    for (const direction of [-1, 1]) {
      const nextIndex = getNextIndex(index, direction * jumpDistance, n);

      // only return if we find a valid loop back to the start
      if (nextIndex === startIndex && jumps + 1 > 0) {
        return jumps + 1; // return the number of jumps made to return to start
      }

      if (!visited[nextIndex]) {
        visited[nextIndex] = true;
        queue.push({ index: nextIndex, jumps: jumps + 1 });
      }
    }
  }

  return -1; // if no path returns to the starting index
}

// Test cases
// { index: 3, jump: 0 }
// { index: 2, jump: 1 }
// { index: 4, jump: 1 }
console.log(ArrayChallenge([2, 3, 5, 6, 1])); // Output: 2
console.log(ArrayChallenge([1, 2, 3, 4, 2])); // Output: 3
console.log(ArrayChallenge([1, 7, 1, 1, 1, 1])); // Output: 2
console.log(ArrayChallenge([1, 4, 2, 3, 5])); // Output: -1 (example of no possible return)
