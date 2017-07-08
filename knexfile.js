// Update with your config settings.

module.exports = {
  client: 'postgresql',
  development: {
    client: 'postgresql',
    connection: {
      database: 'block-change',
      user: 'postgres',
      host: 'localhost',
      password: '',
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'db/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'db/migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
