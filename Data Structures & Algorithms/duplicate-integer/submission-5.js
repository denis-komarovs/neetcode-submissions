class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const counts = {};
        for(let i = 0; i < nums.length; i++){
            counts[nums[i]] = (counts[nums[i]] || 0) + 1;
            if(counts[nums[i]] > 1){
                return true;
            }
        }
        return false
    }
}
