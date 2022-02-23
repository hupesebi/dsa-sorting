function bubbleSort(arr) {
    const swap = (arr, id1, id2) => {
      [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  
    return arr;
  }
  
  module.exports = bubbleSort;