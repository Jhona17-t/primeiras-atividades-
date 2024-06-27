const prompt = require("prompt-sync")();
const peso = Number(prompt("qual o peso do caminhâo"));
switch (true) {
  case peso >= 1000 && peso <= 3999:
    console.log("caminhão de pequeno porte");
    break;

  case peso >= 4000 && peso <= 6000:
    console.log("caminhão de médio porte");
    break;

  case peso >= 6000:
    console.log("caminhão de grande porte");
    break;
  default:
    console.log("não é um caminhão");
}
