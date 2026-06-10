class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map<number,number>

        for(let i=0; i<nums.length; i++){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1)
            }else{
                map.set(nums[i],1)
            }
        }
        
        let sortedArr = [...map.entries()].sort((a,b)=>b[1]-a[1]);
        return sortedArr.slice(0, k).map(entry => entry[0]);
    }
}
