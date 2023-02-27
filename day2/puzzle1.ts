/* 
  --- Day 2: Rock Paper Scissors ---
  --- Part One ---
*/

import fs from "fs";
import path from "path";

const relation = {
  A: {
    wins: "C",
    loses: "B",
    points: 1,
  },
  B: {
    wins: "A",
    loses: "C",
    points: 2,
  },
  C: {
    wins: "B",
    loses: "A",
    points: 3,
  },
};

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");
const data = input.split("\n");

const matches = data.map((match) => {
  const [player1, player2] = match.split(" ");
  const player2Converted = player2
    .replace("X", "A")
    .replace("Y", "B")
    .replace("Z", "C");
  return {
    player1,
    player2: player2Converted,
  };
});

const updatedMatches = matches.map((match) => {
  const player1 = match.player1;
  const player2 = match.player2;

  const player1Wins = relation[player1].wins === player2;
  const player2Wins = relation[player2].wins === player1;
  const draw = player1Wins === player2Wins;

  const p1points = relation[player1].points + (draw ? 3 : player1Wins ? 6 : 0);
  const p2points = relation[player2].points + (draw ? 3 : player2Wins ? 6 : 0);
  return {
    ...match,
    wins: draw ? "draw" : player1Wins ? "p1" : "p2",
    points: {
      player1: p1points,
      player2: p2points,
    },
  };
});

const totalPlayer1 = updatedMatches.reduce((acc, match) => {
  return acc + match.points.player1;
}, 0);

const totalPlayer2 = updatedMatches.reduce((acc, match) => {
  return acc + match.points.player2;
}, 0);

// console.log(updatedMatches);
console.log("player 1 total", totalPlayer1);
console.log("player 2 total (you)", totalPlayer2);
