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
    if (numbers.length === 0) {
        return 0;
    } else if (numbers.length === 1) {
        const num = parseInt(numbers[0], 10);
        if (isNaN(num)) {
            throw new Error('Invalid number format');
        }
        return num;
    }
    const negatives: number[] = [];
    let sum = 0;
    for (const numStr of numbers) {
        const num = parseInt(numStr, 10);
        if (isNaN(num)) {
            throw new Error('Invalid number format');
        }
        if (num < 0) {
            negatives.push(num);
        } else if (num <= 1000) {
            sum += num;
        }
    }
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
    return sum;
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
    if (numbers.length === 0) {
        return 1;
    } else if (numbers.length === 1) {
        const num = parseInt(numbers[0], 10);
        if (isNaN(num)) {
            throw new Error('Invalid number format');
        }
        return num;
    }
    const negatives: number[] = [];
    let product = 1;
    let hasValidNumber = false;
    for (const numStr of numbers) {
        const num = parseInt(numStr, 10);
        if (isNaN(num)) {
            throw new Error('Invalid number format');
        }
        if (num < 0) {
            negatives.push(num);
        } else if (num <= 1000) {
            product *= num;
            hasValidNumber = true;
        }
    }
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
    return hasValidNumber ? product : 1; // Return 1 if no valid numbers
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
        const num = parseInt(numbers[0], 10);
        if (isNaN(num)) {
            throw new Error('Invalid number format');
        }
        return num;
    }
    const negatives: number[] = [];
    let maxNum: number | null = null;
    for (const numStr of numbers) {
        const num = parseInt(numStr, 10);
        if (isNaN(num)) {
            throw new Error('Invalid number format');
        }
        if (num < 0) {
            negatives.push(num);
        } else if (num <= 1000) {
            if (maxNum === null || num > maxNum) {
                maxNum = num;
            }
        }
    }
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
    if (maxNum === null) {
        throw new Error('No valid numbers to find maximum');
    }
    return maxNum;
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
    if (numbers.length === 0) {
        throw new Error('Cannot calculate average of empty array');
    } else if (numbers.length === 1) {
        const num = parseInt(numbers[0], 10);
        if (isNaN(num)) {
            throw new Error('Invalid number format');
        }
        return num;
    }
    const negatives: number[] = [];
    let sum = 0;
    let count = 0;
    for (const numStr of numbers) {
        const num = parseInt(numStr, 10);
        if (isNaN(num)) {
            throw new Error('Invalid number format');
        }
        if (num < 0) {
            negatives.push(num);
        } else if (num <= 1000) {
            sum += num;
            count++;
        }
    }
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
    if (count === 0) {
        throw new Error('No valid numbers to calculate average');
    }
    return parseFloat((sum / count).toFixed(2)); // Round to 2 decimal places
}
