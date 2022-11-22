let a = 10
let b = 25
let c

console.log(`a: ${a} \nb: ${b} \nc: ${c}`)

confirm (`Vamos mudar esses valores?`)

c = a
a = b
b = c
c = 0

console.log(`a: ${a} \nb: ${b} \nc: ${c}`)