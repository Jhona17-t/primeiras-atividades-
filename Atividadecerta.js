const prompt = require("prompt-sync")();

const nome = prompt("Qual seu nome?");

const age = prompt("Qual sua idade?");

const email = prompt("Qual seu email?");

console.log(typeof nome);
console.log(typeof Number(age));
console.log(typeof email);
