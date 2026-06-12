class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

    const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const inverse = clean.split("").reverse().join("");

    return clean === inverse;
    }

}
