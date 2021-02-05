import express from 'express'
import { UserService } from '../services/user.service'
import jwt from 'express-jwt'
import secret from '../../secret.json'

const router = express.Router()

router.post('/authenticate', authenticate)
router.post('/create', create)
router.get('/users-site-city', jwt({ secret: secret.secret, algorithms: ['HS256'] }), getUsersBySiteAndCity)

function authenticate (req, res, next) {
  const userService = new UserService()
  userService.authenticate(req.body).then((user) => {
    return res.json(user)
  }).catch((err) => {
    console.log(err)
    return res.status(500).send(err)
  })
}

function create (req, res, next) {
  const userService = new UserService()
  userService.create(req.body).then((result) => {
    return res.json(result)
  }).catch((err) => {
    console.log(err)
    return res.status(500).send(err)
  })
}

function getUsersBySiteAndCity (req, res, next) {
  if (!req.user.admin) return res.sendStatus(401)
  const userService = new UserService()
  userService.getUsersSiteCity(req.query.codeCity, req.query.nameSite).then((result) => {
    return res.json(result)
  }).catch((err) => {
    console.log(err)
    return res.status(500).send(err)
  })
}

export default router
