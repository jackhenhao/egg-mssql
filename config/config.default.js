'use strict';

/**
 * egg-mssql default config
 * @member Config#mssql
 * @property {String} SOME_KEY - some description
 */
exports.mssql = {
  default: {
    port: 1433,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
  },
  app: true,
  agent: false,

  // Single Database
  // client: {
  //   server: 'host',
  //   port: 'port',
  //   user: 'user',
  //   password: 'password',
  //   database: 'database',
  // },

  // Multi Databases
  // clients: {
  //   db1: {
  //     server: 'host',
  //     port: 'port',
  //     user: 'user',
  //     password: 'password',
  //     database: 'database',
  //   },
  //   db2: {
  //     server: 'host',
  //     user: 'user',
  //     password: 'password',
  //     database: 'database',
  //   },
  // },
};
