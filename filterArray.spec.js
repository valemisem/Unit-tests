const [filterArrayByCondition, isNumber] = require ('./filterArray')

test ('is filtered an array or not', () => {
    const mixedArray = [1, 2, 3.5, 4, 'apple', 5, 'orange', 8, 10.5, true, false]
    expect(filterArrayByCondition(mixedArray, isNumber)).toEqual([1,2, 3.5, 4, 5, 8, 10.5])

})

