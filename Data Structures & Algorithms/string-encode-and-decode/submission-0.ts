class Solution {
    map = new Map<string, string[]>()

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let unifiedString=strs.join("")
        this.map.set(unifiedString,strs)
        return unifiedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        return this.map.get(str)
    }
}
