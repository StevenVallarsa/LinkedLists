// DAY 4 - Part 1

const inputDay4 = require("./inputDay4.txt");

const inputByCard = inputDay4.split("\n");

let total = 0;

inputByCard.forEach(card => {
  let winningNumbers = card.split(":")[1].split("|")[0].trim().split(/\s+/);
  let cardNumbers = card.split("|")[1].trim().split(/\s+/);
  let count = 0;
  winningNumbers.forEach(num => {
    if (cardNumbers.includes(num)) count++;
  });
  if (count > 0) total += Math.pow(2, count - 1);
});

console.log(total);
