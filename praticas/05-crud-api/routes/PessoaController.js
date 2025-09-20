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
    const { nome, cpf, email, dataNascimento } = req.body
    //validar se os dados vinheram
    if (!nome || !cpf || !email || !dataNascimento) {
        return res.status(400).json({ error: "nome, cpf, email e dataNascimento são obrigatorios!!!" })
    }
    //validar se o CPF ja existe
    const pessoa = pessoas.find(pessoa => pessoa.cpf == cpf)
    if (pessoa) {
        return res.status(409).json({ error: "CPF Já cadastrado!!!" })
    }
    //cadastrar a nova pessoa na lista
    const novaPessoa = {
        id: Date.now(),
        nome,
        cpf,
        email,
        dataNascimento
    }
    //inserir a nova pessoa montada na lista
    pessoa.push(novaPessoa)
    res.status(201).json({ message: "Pessoa cadastrada!!!", novaPessoa })
})

// Listar Todos
// - GET /pessoas
router.get('/pessoas', (req, res, next) => {
    const { nome, cpf, email, dataNascimento } = req.body
    //validar se os dados vinheram
    if (!nome || !cpf || !email || !dataNascimento) {
        return res.status(400).json({ error: "nome, cpf, email e dataNascimento são obrigatorios!!!" })
    }
    //validar se a pessoa com aquele ID existe na lista
    const pessoa = pessoas.find(pessoa => pessoa.id == idRecebido)
    if(!pessoa){
        return res.status(404).json({ error: "Pessoa não econtrado!!!" })
    }
    // Sobrescrevo os dados da pessoa para atualizar
    pessoa.nome = nome
    pessoa.email = email
    pessoa.dataNascimento = dataNascimento
    res.json({ message: "Pessoa atualizada com sucesso!!!"})
    
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