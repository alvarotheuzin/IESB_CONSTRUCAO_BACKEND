//importar o express
const express = require('express')

//criar uma intância no meu backend com o express
const app = express()

// intermediários (Middlewares)
// intermediário de LOG
// Toda requisição vaipassar por ele e imprimir no terminal
// infrmações da requisição
app.use((req, res, next) => {
    console.log("Time: ", new Date().toLocaleDateString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})



// Hello World
// req -> a rquisição (os dados da requisição)
// res -> manipulador de resposta
// next -> chama o proximo intermediário
// mapeamento da requisição

app.get('/hello', (req, res, next) => {
    // envio da resposta
    res.send('Hello World ATUALIZADO MEU  PRIMEIRO')
})

app.get('/pessoas', (req, res, next) => {
    const pessoas = [
        {
            id: 1,
            nome: "joão Pedro"
        },
        {
            id: 2,
            nome: "Ana Paula"
        }
    ]
    res.json(pessoas)
})




//executar a aplicação escolhendo a porta que ela vai escutar
app.listen(3000, () => {
    console.log("Minha aplicação está rodando em http://localhost:3000")
})