import { Connection } from '../config/connection'

export class CityRepository {
  connection

  constructor() {
    this.connection = new Connection()
  }

  create (name, code) {
    return new Promise((resolve, reject) => {
      const conn = this.connection.getConnection()
      conn.execute('INSERT INTO cities (name, code) VALUES (?, ?);', [name, code], function (error, results, fields) {
        if (error) {
          console.log(error)
          return reject(new Error('Error insert city'))
        };
        return resolve(true)
      })
    })
  }

  get (code) {
    return new Promise((resolve, reject) => {
      console.log('GET CITY:', code)
      const conn = this.connection.getConnection()
      conn.execute('select * from cities where code = ?', [code], function (error, results, fields) {
        if (error) {
          console.log(error)
          return reject(new Error('Error get city'))
        };
        return resolve(results[0])
      })
    })
  }
}
