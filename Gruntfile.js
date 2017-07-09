module.exports = (grunt) => {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    setup: {
      command: [
        'pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start',
        'knex migrate: latest',
        'knex seed:run'
      ].join('&&')
    }

    eslint: {
      target: ['Gruntfile.js', 'client/**/*.js', 'db/**/*.js', 'server/**/*.js']
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['server/test/**/*.js'],
      },
    },

    pgcreatedb: {
      default: {
        connection: {
          user: config.connection.user,
          password: config.connection.password,
          host: config.connection.host,
          port: config.connection.port,
          database: 'template1'
        },
        name: config.connection.database
      }
    }

  });

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-pg');

  grunt.registerTask('start', ['eslint']);
  grunt.registerTask('test', ['mochaTest']);
};