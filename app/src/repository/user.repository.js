import { Connection } from '../config/connection'

export class UserRepository {
  constructor() {
    this.connection = new Connection()
  }

  getLogin (username, password) {
    return new Promise((resolve, reject) => {
      console.log('GET USER:', username)
      const conn = this.connection.getConnection()
      conn.execute('select * from users where email = ? and password = ?', [username, password], function (error, results, fields) {
        if (error) {
          console.log(error)
          return reject(new Error('Error get login user'))
        };
        return resolve(results[0])
      })
    })
  }

  getUser (username) {
    return new Promise((resolve, reject) => {
      console.log('GET USER:', username)
      const conn = this.connection.getConnection()
      conn.execute('select * from users where email = ?', [username], function (error, results, fields) {
        if (error) {
          console.log(error)
          return reject(new Error('Error get user'))
        };
        return resolve(results[0])
      })
    })
  }

  createUser (username, password, admin, site) {
    return new Promise((resolve, reject) => {
      const conn = this.connection.getConnection()
      conn.execute('INSERT INTO users (email, password, admin, site) VALUES (?, ?, ?, ?);', [username, password, admin, site], function (error, results, fields) {
        if (error) {
          console.log(error)
          return reject(new Error('Error insert user'))
        };
        return resolve(results)
      })
    })
  }

  getUserSiteCity (codeCity, nameSite) {
    return new Promise((resolve, reject) => {
      const conn = this.connection.getConnection()
      conn.execute('select u.* from users u inner join sites s ON u.site = s.code where s.city = ? and s.name = ?', [codeCity, nameSite], function (error, results, fields) {
        if (error) {
          console.log(error)
          return reject(new Error('Error get users'))
        };
        return resolve(results)
      })
    })
  }
}
