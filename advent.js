const input = require("./input.txt");

function findAnswer01(numbers) {
  let total = 0;
  numbers.forEach(line => {
    line = replaceNamesWithNumbers(line);
    let startNumber = 0;
    let endNumber = 0;
    let left = false;
    let right = false;
    for (let i = 0; i < line.length; i++) {
      if (Number(line[i]) && !left) {
        startNumber = Number(line[i]);
        left = true;
      }
      if (Number(line.at(-i - 1)) && !right) {
        endNumber = Number(line.at(-i - 1));
        right = true;
      }
      if (left & right) break;
    }
    total += Number(String(startNumber) + String(endNumber));
  });
  console.log(total);
}

// findAnswer01(input.split("\n")); // convert string into array of strings
// DAY 1 ANSWER = 55447 - correct

// DAY 2 - need to convert spelled out numbers into actual numbers first
// NOT RIGHT 54325, 54270, 54326
// DAY 2 ANSWER = 54706

function replaceNamesWithNumbers(input) {
  const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let num = 1;
  numbers.forEach(number => {
    let index = 0;
    while (index !== -1) {
      index = input.indexOf(number, index);
      if (index !== -1) {
        input = input.split("");
        // add number to second character so as not to break the string
        // other words to numbers -- nineeight == n9nee8ight
        input[index + 1] = String(num);
        input = input.join("");
      }
    }
    num++;
  });
  return input;
}

findAnswer01(input.split("\n"));
