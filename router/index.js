const app = require('express').Router()

app.route('/')
  .get(( req, res ) => {
    res.render('index')
  })

module.exports = app