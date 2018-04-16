'use strict';

const mssql = require('./lib/mssql');

module.exports = agent => {
  if (agent.config.mssql.agent) mssql(agent);
};
