const prompt = require("prompt-sync")();
const usuariofixo = "UMNOMEAI";
const senhafixa = 1234;
let usuario = prompt("digite seu nome");
let senha = prompt("digite sua senha");
if (usuario == usuariofixo) {
  if (senha == senhafixa) {
    console.log("aprovado1");
  } else {
    console.log("não encontrado");
  }
} else {
  console.log("incorreto");
}
