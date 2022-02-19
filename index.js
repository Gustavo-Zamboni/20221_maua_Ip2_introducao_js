// O codigo e avalidado 2 vezes, na primeira passagem ele anota quais os objetos declarados 
// de modo que console.log, por exemplo, e ignorado
// Na segunda passagem, as ordens sao executadas, atribuindo valor a idade, nome e imprimindo na tela
// "let" tem o escopo restrito ao bloco, diferente do "var"

var idade = 18
// como nome nao foi atribuido ainda, ele e representado como "undefined", que e um tipo de javascript
console.log("Oi, " + nome)
if(idade >= 18){
    var nome = "Joao"
    console.log("Parabens, " + nome)
    console.log("Voce pode dirigir")
}
console.log("Ate mais " + nome)


// var linguagem = "Javascript"
// // ponto e virgula opcional
// console.log("Aprendendo " + linguagem);

// // Com "var" a variavel pode ser redeclarada
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem);

// // Menor privilegio, se precisar reatribuir, usar let, caso contrario, usar const

// // Const nao pode modificar o valor da variavel
// const nome = "Gustavo"

// // Usar crase permite escrever em varias linhas
// const endereco = `Rua K, 
// 12`
// const sexo = 'F'
// const idade = 20

// // A variavel "a" nao tem tipo
// let a = 2

// // Usando let a variavel pode variar o seu valor
// let nomeCompleto = "Joao Silva"

// // O tipo do objeto referenciado pode mudar
// a = "abc"

// // Var funciona semelhante ao let, podendo reatribuir, mas let e mais nova 
// var c = 2 + 3
// var d = "abcd"