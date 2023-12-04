const inputDay2 = require("./inputDay2.txt");

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

const x = 2;
let y = 4;
function update(arg) {
  console.log(y);
  return Math.random() + y * arg;
}
y = 2;
y = 3;
console.log(update(x));
