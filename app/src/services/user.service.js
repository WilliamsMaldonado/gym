import secret from '../../secret.json'
import jwt from 'jsonwebtoken'
import { UserRepository } from '../repository/user.repository'

export class UserService {
  constructor() {
    this.repository = new UserRepository()
  }

  authenticate ({ username, password }) {
    return new Promise((resolve, reject) => {
      this.repository.getLogin(username, password).then((user) => {
        const obj = {
          user: user.email,
          admin: user.admin
        }
        const token = jwt.sign(obj, secret.secret, { expiresIn: '1h' })
        return resolve({
          token: token
        })
      }).catch((err) => {
        console.log('ERROR:', err)
        return reject(new Error('Username or password is incorrect'))
      })
    })
  }

  create ({ username, password, admin, site }) {
    return new Promise((resolve, reject) => {
      this.repository.getUser(username).then((user) => {
        if (user == null) {
          this.repository.createUser(username, password, admin, site).then((res) => {
            return resolve({ message: 'user create' })
          }).catch((err) => {
            console.log('ERROR:', err)
            return reject(new Error('Error user create'))
          })
        } else {
          return reject(new Error('User alredy exist'))
        }
      }).catch((err) => {
        console.log('ERROR:', err)
        return reject(new Error('Error user create'))
      })
    })
  }

  getUsersSiteCity (codeCity, nameSite) {
    return new Promise((resolve, reject) => {
      this.repository.getUserSiteCity(codeCity, nameSite).then((result) => {
        return resolve({ users: result })
      }).catch(err => {
        console.log('ERROR:', err)
        return reject(new Error('Error get users'))
      })
    })
  }
}
