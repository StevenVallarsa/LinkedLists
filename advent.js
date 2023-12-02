const input = require("./input.txt");
const inputDay2 = require("./inputDay2.txt");

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

// DAY 2

// findAnswer01(input.split("\n"));

const test = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
// console.log(test.match(/\d+/));
// console.log(Number.parseInt(test));

function findWinningGames(input) {
  let winningGames = [];

  input.forEach(gamePlay => {
    let game = gamePlay.split(":")[0];
    let games = gamePlay.split(":")[1].split(";");
    let red;
    let green;
    let blue;
    let win = true;
    games.forEach(g => {
      red = 12;
      green = 13;
      blue = 14;
      elements = g.split(",");
      elements.forEach(e => {
        if (e.includes("red")) red -= Number.parseInt(e);
        if (e.includes("green")) green -= Number.parseInt(e);
        if (e.includes("blue")) blue -= Number.parseInt(e);
      });
      if (red < 0 || green < 0 || blue < 0) win = false;
    });
    if (win) winningGames.push(Number(game.match(/\d+/)));
    console.log(game, { red, green, blue });
  });
  console.log(winningGames);
  console.log(winningGames.reduce((a, b) => a + b, 0));
}

// findWinningGames(inputDay2.split("\n"));

function findPowerOfCubes(input) {
  let total = 0;
  input.forEach(gamePlay => {
    let games = gamePlay.split(":")[1].split(";");
    let red = 0;
    let green = 0;
    let blue = 0;
    games.forEach(g => {
      elements = g.split(",");
      elements.forEach(e => {
        if (e.includes("red")) {
          if (Number.parseInt(e) > red) red = Number.parseInt(e);
        }
        if (e.includes("green")) {
          if (Number.parseInt(e) > green) green = Number.parseInt(e);
        }
        if (e.includes("blue")) {
          if (Number.parseInt(e) > blue) blue = Number.parseInt(e);
        }
      });
    });
    total += red * green * blue;
  });
  console.log(total);
}

findPowerOfCubes(inputDay2.split("\n"));
