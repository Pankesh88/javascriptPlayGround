const input = [2, 7, 11, 23, 8];
const target = 10;

// @params {input[]} The input array to search the numbers in
// @params {target} target sum
// @output {number[]} pair of indexes

const twoSum = (input, target) => {
    const lengthOfInput = input.length;
    const previousValues = {};
    for(let i = 0; i < lengthOfInput; i++) {
        const currentElement = input[i];
        const lookupFor = target - currentElement;
        const index2 = previousValues[lookupFor];
        if(index2 != null) {
            return [index2, i];
        } else {
            previousValues[currentElement] = i;
        }
        console.log(`Iteration ${i}, index2 ${index2}, previousVlaues ${JSON.stringify(previousValues)}`);
    }
}

console.log(twoSum(input, target));
