import { Connection } from '../config/connection'

export class CityRepository {
  create (name, code) {
    return new Promise((resolve, reject) => {
      const connection = new Connection()
      const conn = connection.getConnection()
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
      const connection = new Connection()
      console.log('GET CITY:', code)
      const conn = connection.getConnection()
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
