/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const map = new Map()

    for(i = 0; i < nums.length; i++) {
        let num = nums[i]
        let compl = target - num
        let index = map.get(compl)

        if (map.has(compl)) {
            return [index, i]
        }

        map.set(num, i)
        
    }

    return [-1, -1]
}