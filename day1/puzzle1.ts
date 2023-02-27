/* 
  --- Day 1: Calorie Counting ---
  --- Part One ---
*/

import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf-8");

const data = input.split("\n");

// adicionar numeros ao array até encontrar um '' (vazio)
// então mudar pro próximo array

const elvesArray: number[][] = [];
let index = 0;

data.forEach((calorieValue) => {
  if (calorieValue === "") {
    // proximo elfo
    index++;
  } else {
    if (elvesArray[index] === undefined) {
      elvesArray[index] = []; // criar o array
    }
    elvesArray[index].push(parseInt(calorieValue));
  }
});

const totals: number[] = [];
elvesArray.forEach((calorieArray) => {
  let sum = 0;

  calorieArray.forEach((calorie) => {
    sum += calorie;
  });

  totals.push(sum);
});

const bigger = Math.max(...totals);
console.log(totals);
console.log(bigger);

// const elvesArray: Array<number[]> = console.log(elvesArray);
