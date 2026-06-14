class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
   isValid(s) {
        let simb = {
            "[": "]",
            "{": "}",
            "(": ")"
        };
        
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            if (Object.keys(simb).includes(s[i])) {
                stack.push(s[i]);
                continue;
            }

            if (simb[stack.pop()] !== s[i]) {
                return false;
            }
        }
        return stack.length === 0;
    }
}
