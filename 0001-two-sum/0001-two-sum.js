/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexArr = []
    for (i =0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
                    if (nums[i] + nums[j] === target) {
            indexArr.push(i)
            indexArr.push(j)
               return indexArr
        }
}

    }
     return indexArr
};