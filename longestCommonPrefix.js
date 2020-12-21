// Longest common pefix using the vertical approach
const input = ['flower', 'florida', 'floyd', 'flava', 'fiona', 'ra'];

// @params {input[]} The input array to search
// @output {prefix} longest common prefix


const longestCommonPrefix = (input)=> {
    let prefix = '';
    if (input.length === 0)  return prefix;
    for( let i = 0; i < input[0].length; i++) {
        const character = input[0][i];
        for (let j = 1; j < input.length; j++ ) {
            if (input[j][i] !== character) {
                return prefix;
            }
        }
        prefix += character;
    }
    return prefix;
}

console.log(longestCommonPrefix(input));
