/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0
    let hi = nums.length

    do {
        let mid = Math.floor((lo + hi) / 2)
        let guess = nums[mid]

        if (guess === target) {
            return mid
        } else if (target > guess) {
            lo = mid + 1
        } else {
            hi = mid - 1
        }

    } while (lo <= hi)

    return -1
};