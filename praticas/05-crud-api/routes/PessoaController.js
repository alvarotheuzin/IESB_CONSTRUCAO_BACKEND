const express = require('express')
const router = express.Router()

// mapeamento dos endpoints e a logica
// Lista de pessoas para simular o banco de dados
let pessoas = [
    {
        id: 1,
        nome: "João Pedro",
        cpf: "12312345678",
        email: "joao@pedro",
        dataNascimento: "01/01/2000"
    },
    {
        id: 2,
        nome: "Maria Joana",
        cpf: "1231234567890",
        email: "maria@joana",
        dataNascimento: "01/01/1998"
    }
]


// Criar
// - POST /pessoas
router.post('/pessoas', (req, res, next) => {

})

// Listar Todos
// - GET /pessoas
router.get('/pessoas', (req, res, next) => {
    
})

//Buscar um
// - GET /pessoas/{id}
router.put('/pessoas', (req, res, next) => {
    
})
//Editar
// - PUT /pessoas/{id}
router.post('/pessoas', (req, res, next) => {
    
})

//Deletar
// - DELETE /pessoas/{id}
router.delete('/pessoas', (req, res, next) => {
    
})











module.exports = router