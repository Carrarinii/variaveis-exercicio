let nome = `Qual o seu nome completo?`
let dia = `Que dia você nasceu?`
let mes = `De qual mês?`
let ano = `De qual ano?`
// movi o arquivo referente ao >NASCIMENTO< para baixo pois ele não conseguia ler antes de calcular
let endereco = `Qual seu endereço?`
let complemento = `Tem algum complemento?`
// movi o arquivo referente ao >ENDERECO-COMPLETO< para baixo pois ele não conseguia ler antes de calcular
let cpf = `Digite seu CPF`
let escolaridade = `Qual sua escolaridade?`
let cnh = `Você tem CNH?`
let temFilhos = `Tem filhos? Quantos?`
let cargoAtual = `Qual seu cargo atual?`
let salario = `Qual seu salário mensal?`
let comissao = `Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero`
let anoDeAdmissao = `Informe o ano de admissão`


//O R atrás das palavras significa Resposta


const nomeR = prompt(nome)

const diaR = Number(prompt(dia))
const mesR = Number(prompt(mes))
const anoR = Number(prompt(ano))

let nascimento = (`${diaR}/${mesR}/${anoR}`)
// Essa parte de juntar os valores precisou ficar DEPOIS da coleta e assimilação e ANTES da entrega da resposta

const nascimentoR = (nascimento)
confirm (`Sua data de nascimento é ${nascimento}?`)
// Quando aprender if e as variáveis do true/false, mudar para opcao de reiniciar a inserção


let enderecoR = prompt(endereco)
let complementoR = prompt(complemento)

let enderecoCompleto = (`${enderecoR} - ${complementoR}`)

let enderecoCompletoR = (enderecoCompleto)
// Melhorar a visualizacao para comandos de resposta mais abaixo no codigo


const cpfR = Number(prompt(cpf))
let escolaridadeR = prompt(escolaridade)
let cnhR = prompt (cnh)
let temFilhosR = Number(prompt (temFilhos))
let cargoAtualR = prompt (cargoAtual)
let salarioR = Number(prompt (salario))
let comissaoR = Number(prompt (comissao))
let anoDeAdmissaoR = Number(prompt (anoDeAdmissao))

console.log(`
    ${nome} - ${typeof nomeR}\n
    ${nascimento} - ${typeof nascimentoR}\n
    ${enderecoCompleto} - ${typeof enderecoCompletoR}\n
    ${cpf} - ${typeof cpfR}\n
    ${escolaridade} - ${typeof escolaridadeR}\n
    ${cnh} - ${typeof cnhR}\n
    ${temFilhos} - ${typeof temFilhosR}\n
    ${cargoAtual} - ${typeof cargoAtualR}\n
    ${salario} - ${typeof salarioR}\n
    ${comissao} - ${typeof comissaoR}\n
    ${anoDeAdmissao} - ${typeof anoDeAdmissaoR}\n
    `)
confirm (`Prosseguir?`)    
console.log(`
    ${nome} - ${nomeR}\n
    Qual sua data de nascimento? - ${nascimentoR}\n
    Qual seu endereço? - ${enderecoCompletoR}\n
    ${cpf} - ${cpfR}\n
    ${escolaridade} - ${escolaridadeR}\n
    ${cnh} - ${cnhR}\n
    ${temFilhos} - ${temFilhosR}\n
    ${cargoAtual} - ${cargoAtualR}\n
    ${salario} - ${ salarioR}\n
    ${comissao} - ${comissaoR}\n
    ${anoDeAdmissao} - ${anoDeAdmissaoR}
    `)