import { FizzBuzz } from './fizz-buzz';

describe('FizzBuzz', () => {
    let fizzBuzz: FizzBuzz;

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    // TODO: Write tests for the FizzBuzz converter
    // Requirements for convert method:
    // 1. Should return "Fizz" for numbers divisible by 3
    // 2. Should return "Buzz" for numbers divisible by 5
    // 3. Should return "FizzBuzz" for numbers divisible by both 3 and 5
    // 4. Should return the number as a string for numbers not divisible by 3 or 5
    // 5. Should handle zero and negative numbers appropriately

    // TODO: Write tests for the sequence generator
    // Requirements for generateSequence method:
    // 1. Should generate correct sequence from 1 to given number
    // 2. Should handle zero and negative numbers appropriately
    // 3. Should return empty array for zero or negative numbers
}); 