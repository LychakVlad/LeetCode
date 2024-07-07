/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 let map = new Map()

 for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let comp = target - num
    let indexSum = map.get(comp)

    if(map.has(comp)) {
        return [i, indexSum]
    }

            map.set(num, i)
        }

        return [-1, -1]
    }