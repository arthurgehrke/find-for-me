const express = require('express')
const nunjucks = require('nunjucks')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const artigos = []
const legislacoes = []
const numeros = []
const orgaos = []

app.get('/', (req, res) => {
  res.render('articles', {})
})

app.post('/find', (req, res) => {
  artigos.push(req.body.artigo)
  legislacoes.push(req.body.legislacao)
  return res.redirect('/')
})



console.log(artigos.length)

app.listen(4000)
