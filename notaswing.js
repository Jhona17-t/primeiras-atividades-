const prompt = require("prompt-sync")();
const nota = Number(prompt("digite a nota"));
switch (true) {
  case nota >= 7:
    console.log("aprovado");
    break;
  case nota <= 6 && nota >= 4:
    console.log("recuperação");
    break;
  case nota <= 3:
    console.log("reprovado");
    break;
  default:
    console.log("não");
}
