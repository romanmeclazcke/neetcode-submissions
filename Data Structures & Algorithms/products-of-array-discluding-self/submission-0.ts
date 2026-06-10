class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result: number[] = new Array(nums.length).fill(1)

        for (let i = 0; i < nums.length; i++) {
            for(let j=0;j<nums.length;j ++){
                if(i!==j){
                    result[i] *= nums[j];
                }
            }
        }
        return result
    }
}
