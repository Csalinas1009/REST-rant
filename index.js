require('dotenv').config()

const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Welcome : )')
})

app.get('*', (req,res)=>{

    res.status(404).send('<h1>404 ERROR NOT FOUND HOMIE</h1>')
})

app.listen(process.env.PORT)