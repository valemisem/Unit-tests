const filterByEvenNumbers = require('./even')
const even = require('./even')

test ('hh', () => {
    const mixedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(filterByEvenNumbers(mixedArray)).toEqual([2, 4, 6, 8, 10]) 
})  // когда работаем с массивами, используем toEqual!!!!!!!!!!!!