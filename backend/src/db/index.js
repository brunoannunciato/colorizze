const mysql = require('mysql')

require('dotenv').config()

const SETTINGS = {
    connectionLimit : process.env.DB_CONNECTION_LIMIT,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD,
    database        : process.env.DB_DATABASE
  }

const pool = mysql.createPool(SETTINGS)

module.exports = pool