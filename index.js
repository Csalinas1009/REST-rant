require('dotenv').config()

const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req,res)=>{

    res.status(404).send('<h1>ERROR. 404. WARNING. WARNING.</h1>')
})

app.listen(process.env.PORT)
