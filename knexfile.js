const path = require('path');
const env = require('dotenv').config()

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

const username = process.env.DB_USER
const password = process.env.DB_PASS

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://' + username + ':'+ password +'@localhost:5432/favourites_test',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://' + username + ':'+ password +'@localhost:5432/favourites',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
