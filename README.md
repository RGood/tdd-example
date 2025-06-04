# Test-Driven Development Practice Problems

This repository contains a series of practice problems designed to help you learn and master Test-Driven Development (TDD) using TypeScript. Each problem is structured to guide you through the TDD cycle: Red (write failing tests), Green (make the tests pass), and Refactor (improve the code while keeping tests green).

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```
4. For watch mode (recommended for TDD):
   ```bash
   npm run test:watch
   ```

## Project Structure

The project contains three practice problems, each in its own directory:

```
src/
├── string-calculator/     # Problem 1: String Calculator
├── fizz-buzz/             # Problem 2: FizzBuzz
└── palindrome/            # Problem 3: Palindrome Checker
```

Each problem directory contains:
- An implementation file (`.ts`)
- A test file (`.test.ts`)
- TODO comments describing the requirements
- Empty test cases for you to implement

## The Problems

### 1. String Calculator

A classic TDD kata that helps you learn the fundamentals of TDD. You'll implement a calculator that takes a string of numbers and returns their sum, with various rules for handling different formats and edge cases.

**Learning Objectives:**
- Writing your first tests
- Handling edge cases
- String parsing
- Error handling
- Incremental development

### 2. FizzBuzz

A well-known programming problem that's perfect for practicing TDD. You'll implement a program that converts numbers to strings based on divisibility rules, and generate sequences of these conversions.

**Learning Objectives:**
- Writing clear, focused tests
- Handling multiple conditions
- Working with sequences
- Refactoring for clarity

### 3. Palindrome Checker

A more complex problem that involves string manipulation and multiple methods. You'll implement different ways to check for palindromes, from simple word checks to complex sentence analysis.

**Learning Objectives:**
- Testing multiple methods
- String manipulation
- Edge case handling
- Working with different requirements

## How to Approach Each Problem

1. **Read the Requirements**
   - Start by reading the TODO comments in both the implementation and test files
   - Understand what each method should do
   - Note the edge cases and special conditions

2. **Write Your First Test**
   - Choose the simplest requirement to implement first
   - Write a test that describes the expected behavior
   - Run the test to see it fail (Red)

3. **Make the Test Pass**
   - Implement the minimum code necessary to make the test pass
   - Don't worry about other requirements yet
   - Run the test to see it pass (Green)

4. **Refactor**
   - Look for ways to improve your code
   - Make sure all tests still pass
   - Repeat the cycle for the next requirement

## TDD Best Practices

1. **Write Tests First**
   - Always write the test before implementing the feature
   - Let the test guide your implementation
   - Make the test fail first to ensure it's working

2. **Keep Tests Simple**
   - One assertion per test when possible
   - Clear test names that describe the behavior
   - Focus on one requirement at a time

3. **Incremental Development**
   - Add one feature at a time
   - Make small, focused changes
   - Keep the code working at all times

4. **Refactor Regularly**
   - Look for code smells
   - Improve readability
   - Remove duplication
   - Keep the code clean

## Tips for Success

1. **Start Small**
   - Begin with the simplest test case
   - Build up complexity gradually
   - Don't try to implement everything at once

2. **Read the Tests**
   - The test file contains hints about the implementation
   - Use the test descriptions to guide your code
   - Make sure your implementation matches the test expectations

3. **Use Watch Mode**
   - Run tests in watch mode to get immediate feedback
   - See test results as you type
   - Catch issues early

4. **Commit Often**
   - Make small, focused commits
   - Document your progress
   - Keep a history of your TDD journey

## Getting Help

If you get stuck:
1. Read the test requirements again
2. Look at the examples in the comments
3. Try writing a simpler test first
4. Break down the problem into smaller steps

Remember: The goal is to learn TDD, not just to solve the problems. Take your time, write good tests, and enjoy the process!

## License

This project is licensed under the ISC License. 