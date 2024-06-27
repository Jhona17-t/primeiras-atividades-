const prompt = require("prompt-sync")();
const nota1 = Number(prompt("digite"));
const nota2 = Number(prompt("digite"));
const nota3 = Number(prompt("digite"));

let media = Number(nota1 + nota2 + nota3) / 3;
console.log(media);
