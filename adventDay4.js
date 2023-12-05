// DAY 4 - Part 1

const inputDay4 = require("./inputDay4.txt");
const inputByCard = inputDay4.split("\n");

function getTotalPoints(input) {
  let total = 0;

  input.forEach(card => {
    let winningNumbers = card.split(":")[1].split("|")[0].trim().split(/\s+/);
    let cardNumbers = card.split("|")[1].trim().split(/\s+/);
    let count = 0;
    winningNumbers.forEach(num => {
      if (cardNumbers.includes(num)) count++;
    });
    if (count > 0) total += Math.pow(2, count - 1);
  });
  console.log(total);
}

// getTotalPoints(inputByCard);

// Day 4 - Part 2

function getTotalCards(input) {
  const cards = new Array(input.length).fill(1);
  for (let i = 0; i < input.length; i++) {
    let winningNumbers = input[i].split(":")[1].split("|")[0].trim().split(/\s+/);
    let cardNumbers = input[i].split("|")[1].trim().split(/\s+/);
    let count = 0;
    winningNumbers.forEach(num => {
      if (cardNumbers.includes(num)) count++;
    });
    // console.log(cards);
    // console.log(count);
    for (let j = 1; j <= count; j++) {
      if (i + j < cards.length) cards[i + j] += cards[i];
      // 1, 2, 4, 8, 14, 1
    }
  }
  console.log(cards.reduce((acc, num) => acc + num, 0));
}

const test = [
  "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
  "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
  "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
  "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
  "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
  "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
]; // answer = 30

getTotalCards(inputByCard);

// 980 too low
// 23806951 right answer
