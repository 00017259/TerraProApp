const express = require('express')
const app = express()
const Joi = require('joi')
const path = require('path')
const port = process.env.NODE_ENV || 8800

//load app middlewares
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//load our API routes
app.use('/items', require('./routes/items'))


app.get('/', (req, res) => {
    res.render('home')
})


//estaablich http server connection
app.listen(port, () => console.log('App is listening port '+port))