const prompt = require("prompt-sync")();

const nome = String(prompt("digite seu nome? "));
const idade = Number(prompt("digite sua idade? "));
const email = String(prompt("digite seu email? "));

console.log("Nome: ", nome);
console.log("Idade:", idade);
console.log("E-mail:", email);
