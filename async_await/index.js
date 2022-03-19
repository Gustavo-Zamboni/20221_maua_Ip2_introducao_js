// const { default: axios } = require('axios')

// require('dotenv').config()

// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const LANGUAGE = process.env.LANGUAGE
// const UNITS = process.env.UNITS
// const Q = process.env.Q

// // operador de desestruturação
// // const {PROTOCOL,BASE_URL,APPID,LANGUAGE,UNITS} = process.env

// const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

// //IO-BOUND 
// axios.get(url)
// .then(res => {
//     console.log(res.data)
//     return res.data
// })
// .then(res => {
//     console.log(res.cnt)
//     return res
// })
// .then(res => {
//     return res['list']
// })
// .then(res => {
//     for(let previsao of res){
//         console.log(`
//             ${new Date (+previsao.dt * 1000).toLocaleString()},
//             Min: ${previsao.main.temp_min}\u00B0C,
//             Min: ${previsao.main.temp_max}\u00B0C,
//             Hum: ${previsao.main.humidity}%,
//             ${previsao.weather[0].description}
//         `)
//     }
// })
// .then(res => {
//     //exibir a qunatidade de previsões que têm percepção humana 
//     //de temperatura acima de 30 graus
    
// })

// ---------------------------------------------------------------------------------------------------- //

function fatorial(n){
    if(n<0) 
        return Promise.reject("Valor não pode ser negativo")
    let res = 1
    for(let i = 2; i <= n;i++)
        res *= i
    return Promise.resolve(res)
}


// await sempre deve ser usado com async, mas async pode ser utilizado independentemente
// Se a operação for I/O bound não bloqueia a execução, ela é paralelizada pelo javascrypt
async function chamadaComAsyncAwait(){
    try {
        const f1 = await fatorial(10)
        console.log(f1)
        const f2 = await fatorial(-10)
        console.log(f2)    
    } catch (error) {
        console.log(error)
    }
}

chamadaComAsyncAwait()

// function chamadaComThenCatch(){
//     fatorial(10)
//     .then(res => console.log(res))
//     .catch(erro => console.log(erro))

//     fatorial(-10)
//     .then(res => console.log(res))
//     .catch(erro => console.log(erro))
// }

// chamadaComThenCatch()


// // Async devolve uma promise que da acesso ao return 
// async function hello (nome){
//     return `Hello, ${nome}`
// }

// // 1º modo de chamar a função
// hello("Joao").then(res => console.log(res))

// // 2º modo de chamar a função
// const promise = hello("Ana")
// promise.then(res=> console.log(res))





// function hello (nome){
//     return new Promise(function(resolve, reject){
//         resolve(`Hello ${nome}`)
//     })
// }

// hello("Pedro").then((res)=> console.log(res))

// function hello(nome){
//     return `Hello ${nome}`
// }

// const resultado = hello("Pedro")
// console.log(resultado)