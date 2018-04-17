'use strict';

const assert = require('assert');
const mssql = require('mssql');

module.exports = app => {
  app.addSingleton('mssql', createClient);
};


let count = 0;

async function createClient(config, app) {
  // test config
  assert(config.server && config.port && config.user && config.database, `[egg-mssql] 'server: ${config.server}', 'port: ${config.port}', 'user: ${config.user}', 'database: ${config.database}' are required on config`);

  app.coreLogger.info('[egg-mssql] connecting %s@%s:%s/%s', config.user, config.server, config.port, config.database);
  const pool = new mssql.ConnectionPool(config);
  const client = await pool.connect();

  pool.on('error', err => {
    app.coreLogger.error('mssqlpool', err);
  });

  mssql.on('error', err => {
    app.coreLogger.error('mssqlglobal', err);
  });

  // 做启动应用前的检查
  app.beforeStart(async function startMssql() {
    const request = new mssql.Request(client);
    const rows = await request.query('select getdate() as currentTime;');
    const index = count++;
    app.coreLogger.info(`[egg-mssql] instance[${index}] status OK, mssql currentTime: ${rows.recordset[0].currentTime}`);
  });
  return client;
}
