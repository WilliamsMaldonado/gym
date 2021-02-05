import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userController from './controllers/user.controller'
import cityController from './controllers/city.controller'
import siteController from './controllers/site.controller'
import jwt from './config/jwt'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(jwt())

const port = 4000
app.listen(port, function () {
  console.log('Server running port: ', port)
})

app.use('/users', userController)
app.use('/cities', cityController)
app.use('/sites', siteController)

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'Invalid Token' })
  }
})
