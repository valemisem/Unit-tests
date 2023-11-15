function filterArrayByCondition(arr, conditionFunction) {
    return arr.filter(conditionFunction);
  }
  
  // Example usage:
  function isNumber(item) {
    return typeof item === 'number' && !isNaN(item);
  }
  
  const mixedArray = [1, 2, 3.5, 4, 'apple', 5, 'orange', 8, 10.5, true, false];
  const numbersOnly = filterArrayByCondition(mixedArray, isNumber);
  console.log(numbersOnly); // Output: [1, 5, 8, 10.5]

  module.exports = [filterArrayByCondition, isNumber]

  