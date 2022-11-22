// Parte 1

let nome
let idade

console.log (typeof nome)
console.log (typeof idade)

// O resultado foi "undefined" porque o sistema não reconhece nenhum dos valores 

nome = prompt("Qual o seu nome?")
idade = prompt("Quantos anos você tem?")

console.log (typeof nome)
console.log (typeof idade)

// Agora ele leu como "string" as respostas escritas, mas não leu a idade como "Number"

console.log("Olá",nome+", você tem",idade,"anos")
confirm (`Olá ${nome}, você tem ${idade} anos`)

// Parte 2

const p1 = "Qual seu jogo favorito?"
const p2 = "Qual sua música favorita?"
const p3 = "Qual seu livro favorito?"

const r1 = prompt(p1)
const r2 = prompt(p2)
const r3 = prompt(p3)

console.log(p1,"-",r1)
console.log(p2,"-",r2)
console.log(p3,"-",r3)