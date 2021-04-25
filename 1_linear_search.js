const array = [7, 2, 10, 3, 4, 11, 8, 5, 1, 2, 13, 1, 9, 6];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log('index: ', linearSearch(array, 6), 'count: ', count);
