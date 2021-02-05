import mysql from 'mysql2'

export class Connection {
  constructor () {
    this.connection = mysql.createConnection({
      host: process.env.DATABASE_HOST || 'localhost',
      user: 'root',
      password: 'master',
      database: 'gym'
    })
  }

  getConnection () {
    this.connection.connect(function (err) {
      if (err) {
        console.error('error connecting ' + err.stack)
        return null
      }
      console.log('connected ')
    })
    return this.connection
  }
}
