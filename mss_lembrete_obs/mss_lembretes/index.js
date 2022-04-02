const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()

//estamos aplicando um middleware que executa em todas as requisições
app.use((req, res, next) => {
    console.log("oi")
    next()
})
app.use(express.json())

const lembretes = {}
contador = 0

//GET
//exemplo.com.br/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
}) 

//POST
app.post('/lembretes', (req,res) => {
    contador++
    //{texto: "Fazer café"}
    const {texto} = req.body
    lembretes[contador] ={contador: contador, texto: texto}
    res.status(201).send(lembretes[contador])
})
 
 

app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})

app.post('/lembretes', (req, res) => {

})