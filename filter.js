function isNumber(item) {
    return typeof item === 'number' && !isNaN(item);
  }
  
  function filterNumbers(arr) {
    return arr.filter(isNumber);
  }
  
  // Example usage:
  const mixedArray = [1, 'apple', 5, 'orange', 8, 10.5, true, false];
  const numbersOnly = filterNumbers(mixedArray);
  console.log(numbersOnly); // Output: [1, 5, 8, 10.5]
  

  module.exports = filterNumbers