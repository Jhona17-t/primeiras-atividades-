const prompt = require("prompt-sync")();
let nota1 = Number(prompt("digite a sua nota"));
let nota2 = Number(prompt("digite a sua nota"));
let nota3 = Number(prompt("digite sua nota"));
let media = (nota1 + nota2 + nota3) / 3;
if (media < 4) {
  console.log("reprovado");
} else if (media >= 4 && media < 7) {
  console.log("recuperação");
} else {
  console.log("aprovado");
}
