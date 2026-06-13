class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start=0
        let end=heights.length-1;

        let maxResult=0

        while(start<end){
            let pStart=heights[start]
            let pEnd=heights[end]
            let maxHeigth= Math.min(pStart,pEnd);
            let distance = end - start;
            maxResult= Math.max(maxResult,maxHeigth*distance);
            
            if(pStart>pEnd){
                end--
            }else{
                start++
            }
        }
        return maxResult
    }
}
