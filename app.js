require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('peticion recibida')
    res.status(200).send('<h1> Hola Mundo SIN ENV')
})

const PORT= process.env.PORT || 4000

app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto  ${PORT}`)
})