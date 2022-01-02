require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs')

const router = require('./router')
app.use('/', router)

app.listen(port, (req, res) => { console.log('Server running in port ' + port) })