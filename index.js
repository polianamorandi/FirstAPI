const { json } = require('express')
const express = require('express')

const clientes = [
    {
        id: 1,
        nome: 'Poliana', 
        idade: 23, 
        fone: '99999-9999',
        vip: true
    },
    {   
        id: 2,
        nome: 'Wesley', 
        idade: 26, 
        fone: '99999-9999',
        vip: false
    }
]
const app = express()
app.get('/', (req,resp) => {
    resp.json({'resposta' : 'Sucesso!'})
}) 

app.get('/clientes', (req,resp) => {
    resp.json(clientes)
})

app.get('/clientes/:id', (req,resp) => {
    const id = req.params.id
    resp.json(clientes.filter(cliente => cliente.id == id))
})

app.listen(3000)
module.exports = app
