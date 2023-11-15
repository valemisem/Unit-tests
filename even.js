function filterByEvenNumbers(arr) {
    return arr.filter(item => typeof item === 'number' && item % 2 === 0);
  }
  
  // Example usage:
  const mixedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterByEvenNumbers(mixedArray);
  console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

  module.exports = filterByEvenNumbers