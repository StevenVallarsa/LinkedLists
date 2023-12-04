const rawInput = require("./inputDay3.txt");

const inputArray = rawInput.split("\n");

const input = [];
const symbols = "+-*/@%#=$&";

inputArray.forEach(line => {
  input.push(line.split(""));
});

const partNumbers = [];

function findPartNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    let partNumber = "";
    for (let j = 0; j < input[0].length; j++) {
      if (/\d/.test(input[i][j])) {
        partNumber += input[i][j];
        if (findSymbols(i, j, input)) {
          while (j < input[0].length && /\d/.test(input[i][j + 1])) {
            j++;
            partNumber += input[i][j];
          }
          partNumbers.push(partNumber);
          partNumber = "";
        }
      } else {
        partNumber = "";
      }
    }
  }
  console.log(partNumbers.reduce((a, b) => a + Number(b), 0));
}

function findSymbols(i, j, input) {
  if (i > 0) {
    if (j > 0 && symbols.includes(input[i - 1][j - 1])) return true;
    if (symbols.includes(input[i - 1][j])) return true;
    if (j < input[i].length - 2 && symbols.includes(input[i - 1][j + 1])) return true;
  }
  if (j > 0 && symbols.includes(input[i][j - 1])) return true;
  if (j < input[i].length - 1 && symbols.includes(input[i][j + 1])) return true;

  if (i < input.length - 1) {
    if (j > 0 && symbols.includes(input[i + 1][j - 1])) return true;
    if (symbols.includes(input[i + 1][j])) return true;
    if (j < input[i].length - 2 && symbols.includes(input[i + 1][j + 1])) return true;
  }
  return false;
}

// const test = [
//   ["1", "1", ".", "2", "2"],
//   [".", ".", "+", ".", "."],
//   [".", "9", "9", ".", "."],
//   [".", ".", "*", ".", "."],
//   [".", ".", ".", "9", "8"],
// ];

findPartNumbers(input);

// PART 1
// loop through inputArray to create "input" array (array of arrays)
// loop through input
//   - if digit, hold number and check 8 spots around for symbols
//   - if symbol found toggle this number as good and save
//   - keep checking for numbers until . found
//   - convert to number and push into partNumber array

// PART 2
// loop through "input" array of arrays
//  - if * found, check around index to see if there in a number touching it
//  - if number found, work back to start of number and collect entire number
//  - keep searching around * to find second number
//  - if found work back to start of number and collect entire number
//  - multiply both numbers and store in gearRatio array
//  - add all numbers in gearRatio array
