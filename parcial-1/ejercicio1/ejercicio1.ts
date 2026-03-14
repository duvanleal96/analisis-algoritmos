function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const count: {[key: string]: number} = {};

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        const ch = t[i];
        if (!count[ch]) {
            return false;
        }
        count[ch]--;
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
