/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    let newS = {}
    let newT = {}

    for (let i = 0; i < s.length; i++) {
        newS[s[i]] = 1 + (newS[s[i]] || 0)
        newT[t[i]] = 1 + (newT[t[i]] || 0)
    }

    for (const key in newS) {
        if (newS[key] !== newT[key]) {
            return false
        }
    }

    return true
};