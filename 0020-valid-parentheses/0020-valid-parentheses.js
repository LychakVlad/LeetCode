/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for (const char of s) {
        let isBracket = char in map
        
        if(!isBracket) {
            stack.push(char)
            continue
        }

        let isEqual = stack[stack.length - 1] === map[char]

        if(isEqual) {
            stack.pop()
            continue
        }

        return false
    }

    return stack.length === 0
};