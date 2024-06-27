const prompt = require("prompt-sync")();
const idade = Number(prompt("digite"));
if (idade > 18) {
  console.log("apto a dirigir");
} else console.log("não possui iadade");
