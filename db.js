// import * as mysql from 'mysql'
let mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'studdata'
})

connection.connect()

module.exports = connection
