import { Connection } from '../config/connection'

export class SiteRepository {
  constructor() {
    this.connection = new Connection()
  }

  create (name, cityCode) {
    return new Promise((resolve, reject) => {
      const conn = this.connection.getConnection()
      conn.execute('INSERT INTO sites (name, city) VALUES (?, ?);', [name, cityCode], function (error, results, fields) {
        if (error) {
          console.log(error)
          return reject(new Error('Error insert site'))
        };
        return resolve(true)
      })
    })
  }

  get (name) {
    return new Promise((resolve, reject) => {
      console.log('GET SITE:', name)
      const conn = this.connection.getConnection()
      conn.execute('select * from sites where name = ?', [name], function (error, results, fields) {
        if (error) {
          console.log(error)
          return reject(new Error('Error get site'))
        };
        return resolve(results[0])
      })
    })
  }
}
