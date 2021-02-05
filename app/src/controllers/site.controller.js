import express from 'express'
import { SiteService } from '../services/site.service'
import secret from '../../secret.json'
import jwt from 'express-jwt'

const router = express.Router()
router.post('/create', jwt({ secret: secret.secret, algorithms: ['HS256'] }), create)

function create (req, res, next) {
  if (!req.user.admin) return res.sendStatus(401)
  const service = new SiteService()
  service.create(req.body).then((result) => {
    return res.json(result)
  }).catch((err) => {
    console.log(err)
    return res.status(500).send(err)
  })
}

export default router
