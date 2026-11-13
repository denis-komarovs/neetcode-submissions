class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numbers = new Set()
        for(let i = 0; i<nums.length; i++){
            if(numbers.has(nums[i])){
                return true;
            }
            numbers.add(nums[i]);
        }
        return false;
    }
}
