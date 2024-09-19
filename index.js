const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'tarefa3')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/borre', (req, res) => {
    res.sendFile(`${basePath}/inter.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta:${port}`)
})