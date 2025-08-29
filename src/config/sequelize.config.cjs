require('ts-node/register')
require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? undefined,
    database: process.env.DB_NAME ?? 'check_assistance',
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '3306', 10),
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: undefined,
    database: 'database_test',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: undefined,
    database: 'database_production',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  }
}
