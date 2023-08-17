/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    
    let newArr = []
    let arrLength = arr.length
    
    for (let i = 0; i < arrLength; i += size) {
        newArr.push(arr.slice(i, i+ size))
    }
    
    return newArr
};
