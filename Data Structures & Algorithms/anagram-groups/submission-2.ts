class Solution {
  groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const st of strs) {
      const key = this.invertStrs(st);

      if (!map.has(key)) {
        map.set(key, []);
      }

      map.get(key)!.push(st);
    }

    return Array.from(map.values());
  }

  invertStrs(s: string): string {
    return s
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  }
}