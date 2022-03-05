// O codigo e avalidado 2 vezes, na primeira passagem ele anota quais os objetos declarados 
// de modo que console.log, por exemplo, e ignorado
// Na segunda passagem, as ordens sao executadas, atribuindo valor a idade, nome e imprimindo na tela
// "let" tem o escopo restrito ao bloco, diferente do "var"

// var idade = 18
// // como nome nao foi atribuido ainda, ele e representado como "undefined", que e um tipo de javascript
// console.log("Oi, " + nome)
// if(idade >= 18){
//     var nome = "Joao"
//     console.log("Parabens, " + nome)
//     console.log("Voce pode dirigir")
// }
// console.log("Ate mais " + nome)


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

//------------------------------------------------------------------------------------------------------------//

// //  Coerção
// // ela é implícita
// const n1 = 2;
// const n2 = '3';
// const n3 = n1 + n2;
// console.log(n3);

// // Coerção explícita
// const n4 = n1 + Number(n2);
// // Ou também pode ser escrito como:
// // const n4 = n1 + +n2;
// console.log(n4);

// // = atribuição
// // == comparação (com coerção implícita)
// // === comparação (sem coerção implícita, compara por tipo e valor)

// console.log(1 == 1);
// console.log(1 == '1');

// // Compara primeiro por tipo e depois por valor
// console.log(1 === 1);
// console.log(1 === '1');

// console.log(true == 1); - true
// console.log(true == 2); - false
// console.log(1 == [1]); - true
// console.log(null == null); - true

// O null tem um valor lógico associado, o mesmo para o undefined
// ambos são convertidos para boolean como falso devido à coerção implícita
// console.log(null == undefined); - true

// console.log([] == false); - true
// console.log([] == []); - false
// console.log([] === []); - false
// const a = [];
// const b = [];
// console.log(a === b) - true

// // Vetores
// const v1 = [];
// console.log(v1.length);
// v1[0] = 3.4;
// v1[2] = "abc";
// v1[10] = 2;
// console.log(v1.length);

// for (let i = 0; i < v1.length; i++){
//     console.log(v1[i]);
// }

// const v2 = [2, "abc", true];


// const nomes = [
//     "Ana Maria", 
//     "Antonio",
//     "Rodrigo",
//     "Alex",
//     "Cristina"
// ];

// // Encontrar todos os nomes que começam com A



// // arrow function - funcao sem nome com lista de parametros e corpo
// // () => {}

// const apenasA = nomes.filter((n) => {
//     return n.startsWith("A");
// });
// console.log(apenasA);


// const mapeamento = nomes.map((nome) => {
//     return nome.charAt(0);
// });
// console.log(mapeamento);

// const resultado = nomes.every((n) => {
//     return n.startsWith("A");
// });
// console.log(resultado);

// const valores = [1,2,3,4];
// const soma = valores.reduce((ac, atual) => {
//     return ac + atual;
// });
// console.log(soma);

// // Funções

// // Definição da função
// function hello(){
//     console.log("oi");
// }

// // Chamada da função
// // ou seja, o ponto em que ela é colocada em execução
// hello();

// // O nome hello da função vai ser redefinido na segunda passagem do javascript, por isso aparece "oi, undefined"
// function hello(nome){
//     console.log("oi, " + nome);
// }
// hello("Jose");

// function somatoria(a,b){
//     return a + b;
// }
// const res = somatoria(2,3);
// console.log(res);

// const dobro = function(n){
//     return 2*n;
// }
// const valorDobrado = dobro(6);

// // Colocando valor padrão para a função
// const triplo = function (n = 10){
//     return n * 3;
// }

// // Omitir return e chaves na arrow function, se colocar chaves vai retornar undefined 
// const dobrar = (n) => n *2;
// console.log(dobrar(6));

// let umaFuncao = function(){
//     console.log("Fui armazenado em uma variável");
// }
// // umaFuncao();

// // Funções de alta ordem
// function f (funcao){
//     funcao()
// }

// function g (){
//     function outrafuncao(){
//         console.log("Fui criada por g");
//     }
//     return outrafuncao();
// }


// const gResult = g();
// console.log(gResult);

// const print = console.log
// print(2);


//------------------------------------------------------------------------------------------------------------//

// // CLosure
// function f () {
//     let nome = "Joao"
//     function g (){
//         console.log(nome)
//     }
//     g()
// }

// f()


// Devolver una nova coleção 
// que possui todos os elementos
// de v que fazem com que f produza true

// function filter(v, f){
//     let resposta = []
//     for(let i = 0; i<v.length;i++){
//         if(f(v[i])){
//             resposta.push(v[i])
//         }   
//     }
//     return resposta
// }

// //[2]
// console.log(filter([1,2,3], e => e%2 === 0))

// // Produzir uma coleção nova 
// // que para cada elemento de v[i]
// // possui o valor resultante de f(v[i])

// function map(v,f){
//     let resposta = []
//     for(let i = 0; i<v.length;i++){
//         resposta.push(f(v[i]))
//     }
//     return resposta
// }

// //[4,3]
// console.log(map(['abcd','abc'], e => e.length))

// JSON Javascript Object Notation
// let pessoa = {
//     nome: "José",
//     idade: 22,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 122
//     }
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])

// let c ={
//     cnpj: 294869245,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 122
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: "Ka",
//             ano: 1995,
//             revisoes: [
//                 {
//                     data: "14/02/1996",
//                     consultor: "Fábio"
//                 },
//                 {
//                     data: "14/02/1997",
//                     consultor: "João"
//                 }
//             ]
//         }
//     ]
// }

// console.log(c.veiculos[0].revisoes[1].consultor)

// const calc = {
//     soma: (a,b) => a + b,
//     subtracao: function (a,b) {return a - b}
// }
// console.log(calc.soma(2,3))
// console.log(calc.subtracao(2,3))

// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 9 + 4
//     return d 
// }

// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 9 + 4
//     return d 
// }

// const a = 2 + 4
// const b = 5 + 4

// setTimeout(function(){
//     const d = demorada()
//     console.log(d)
// }, 500)

// const e = a + b + 2
// console.log(e)

// const fs = require ('fs')
// // Funções callback
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if(erro)
//             console.log(`Deu erro: ${erro}`)
//         else{
//             console.log(`Conteúdo: ${conteudo.toString()}`)
//             const triplo = +conteudo.toString() * 3
//             const finalizar = (erro) => {
//                 if (erro)
//                     console.log("Erro ao salvar o triplo")
//                 else
//                     console.log("Salvou com sucesso")
//             }
//             fs.writeFile("triplo.txt", triplo.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo,exibirConteudo)
// } 
// abrirArquivo("arquivo.txt")

// 1 + 2 + ... + n-1 + n
// function calculoDemorado(numero){
//     return new Promise (function(resolve, reject){
//         if(numero < 0)
//         reject("Número inválido")
//         let res = 0
//     for (let i = 1; i <= numero; i++){
//         res += i
//     }
//     resolve(res)
//     })
// }

// const res = calculoDemorado(100)
// res.then((resultado) => console.log(resultado))
// res.catch((erro) => console.log("Falhou: " + erro))

// function calculoRapido (numero){
//     return Promise.resolve ((numero * (numero + 1)) / 2)
// }
// calculoRapido(2).then(res => console.log(res))
