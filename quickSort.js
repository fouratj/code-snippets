function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr.pop();
  const left = quickSort(arr.filter(e => e < pivot));
  const right = quickSort(arr.filter(e => e >= pivot));

  return [...left, pivot, ...right];
}

console.log(quickSort([1, 5, 2, 7, 4, 9, 3, 6]));
