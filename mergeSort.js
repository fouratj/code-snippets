function quickSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
            const smaller = arr[i]
            arr[i] = arr[j]
            arr[j] = smaller
        }
    }
  }
  return arr
}

function sort(arr1, arr2) {
  arr1
  arr2
  const arr = []

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      arr.push(arr1.shift())
    } else {
      arr.push(arr2.shift())
    }
  }

  return [...arr, ...arr1, ...arr2]
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)

  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)

  const sortedLeft = quickSort(left)
  const sortedRight = quickSort(right)
  
  return sort(sortedLeft, sortedRight)
}




const array = mergeSort([1, 4, 78, 3, 8, 6, 5, 0, 10, 15]);
console.log(array);