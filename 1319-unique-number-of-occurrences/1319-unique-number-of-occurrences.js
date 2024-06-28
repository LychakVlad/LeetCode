/**
 * @param {number[]} arr
 * @return {boolean}
 */
 
const uniqueOccurrences = function(arr) {
    const newMap = new Map()

    arr.forEach(element => newMap.set(element, (newMap.get(element) || 0) + 1  ))
    
    const newSet = new Set(newMap.values())
    
    return newSet.size === newMap.size
};