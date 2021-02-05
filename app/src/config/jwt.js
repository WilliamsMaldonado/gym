import expressJwt from 'express-jwt'
import secret from '../../secret.json'

export default jwt

function jwt () {
  return expressJwt({ secret: secret.secret, algorithms: ['HS256'] }).unless({
    path: [
      // public routes that don't require authentication
      '/users/authenticate'
    ]
  })
}
