'use strict';
const mssql = require('mssql');
const Service = require('egg').Service;
class UserService extends Service {
  async get() {
    // use db1
    const request = new mssql.Request((await this.app.mssql.get('db1')));
    const rows = await request.query('SELECT name FROM sysobjects where xtype = \'U\';');

    // use db2
    const request1 = new mssql.Request((await this.app.mssql.get('db2')));
    const rows1 = await request1.query('SELECT name FROM sysobjects where xtype = \'U\';');
    console.log(rows, rows1);
    return '6';
  }
}

module.exports = UserService;
