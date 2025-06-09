/**
 * Add method takes an array of number strings and returns their sum.
 * Requirements:
 * 1. Empty array returns 0
 * 2. Single number returns that number
 * 3. Multiple numbers returns their sum
 * 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
 * 5. Numbers bigger than 1000 should be ignored
 * 
 * @param numbers Array of number strings to add
 * @returns The sum of the numbers
 */
export function add(numbers: string[]): number {
    const negatives: string[] = [];
    if (numbers.length === 0) {
        return 0;
    }else if (numbers.length === 1) {
        return parseInt(numbers[0], 10);
    }else if (numbers.length > 1) {
        let sum =0;
        for (const num of numbers) {
            const parsedNum = parseInt(num, 10);
            if (parsedNum < 0) {
                negatives.push(num);
            } else if (parsedNum <= 1000) {
                sum += parsedNum;
            }
        }
        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
        return sum;
    }
    throw new Error('Not implemented');
}

/**
 * Multiply method takes an array of number strings and returns their product.
 * Requirements:
 * 1. Empty array returns 1
 * 2. Single number returns that number
 * 3. Multiple numbers returns their product
 * 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
 * 5. Numbers bigger than 1000 should be ignored
 * 
 * @param numbers Array of number strings to multiply
 * @returns The product of the numbers
 */
export function multiply(numbers: string[]): number {
    const negatives: string[] = [];
    if (numbers.length === 0){
        return 1;
    }else if (numbers.length === 1){
        return parseInt(numbers[0], 10);
    }else if (numbers.length > 1){
        let result: number = 0;
        for (const num of numbers) {
            const parsedNum = parseInt(num, 10);
            if (parsedNum < 0) {
                negatives.push(num);
            } else if (parsedNum <= 1000) {
                if (!result) {
                    result = parsedNum;
                } else {
                    result *= parsedNum;
                }
            }
        }
        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
        if (result === 0) {
            return 0; // If no valid numbers were multiplied, return 0

        }
        return result;
    }

    throw new Error('Not implemented');

}

/**
 * Find the maximum number in the array.
 * Requirements:
 * 1. Empty array throws error with message "Cannot find maximum of empty array"
 * 2. Single number returns that number
 * 3. Multiple numbers returns the largest number
 * 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
 * 5. Numbers bigger than 1000 should be ignored
 * 
 * @param numbers Array of number strings to find maximum from
 * @returns The maximum number
 */
export function max(numbers: string[]): number {
    if (numbers.length === 0) {
        throw new Error('Cannot find maximum of empty array');
    } else if (numbers.length === 1) {
        return parseInt(numbers[0], 10);
    }else if (numbers.length > 1) {
        let max:number = 0;
        for (const num of numbers) {
            const parsedNum = parseInt(num, 10);
            if (parsedNum < 0) {
                throw new Error(`Negatives not allowed: ${num}`);
            } else if (parsedNum <= 1000) {
                if (max === 0 || parsedNum > max) {
                    max = parsedNum;
                }
            }
        }
        return max;
    }
    throw new Error('Not implemented');
}

/**
 * Calculate the average of the numbers in the array.
 * Requirements:
 * 1. Empty array throws error with message "Cannot calculate average of empty array"
 * 2. Single number returns that number
 * 3. Multiple numbers returns their average
 * 4. Throw exception for negative numbers with message "Negatives not allowed: [negative numbers]"
 * 5. Numbers bigger than 1000 should be ignored
 * 6. Result should be rounded to 2 decimal places
 * 
 * @param numbers Array of number strings to calculate average from
 * @returns The average of the numbers
 */
export function average(numbers: string[]): number {
    if(numbers.length === 0){
        throw new Error('Cannot calculate average of empty array');
    }else if (numbers.length === 1) {
        return parseFloat(numbers[0]);
    }else if (numbers.length > 1) {
        const negatives: string[] = [];
        let sum = 0;
        let count = 0;

        for (const num of numbers) {
            const parsedNum = parseFloat(num);
            if (parsedNum < 0) {
                negatives.push(num);
            } else if (parsedNum <= 1000) {
                sum += parsedNum;
                count++;
            }
        }
        if (negatives.length > 0) {
            throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
        }
        if (count === 0) {
            return 0; // If no valid numbers were found, return 0
        }
        return parseFloat((sum / count).toFixed(2));
    }
    throw new Error('Not implemented');
}
