const express = require('express')
const app = express()

//intermediários
const cors = require('cors')
//habilita receber json como corpo da requisição
app.use(express.json())

app.use((req, res, next) => {
    console.log("-----### LOG da Requisição ###-----")
    console.log("TIME: ", new Date().toLocaleString())
    console.log("METODO: ", req.method)
    console.log("ROTA: ", req.url)
    next()
})

//Roteadores
const PessoaController = require('./routes/PessoaController')
app.use(PessoaController)

//executa
app.listen(3000, () =>{
    console.log("Api rodando em http://localhost:3000")
})