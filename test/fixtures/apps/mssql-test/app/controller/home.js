'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.mssql.name;
    // 调用service层操作数据库
    console.log((await this.service.user.get()));
  }
}

module.exports = HomeController;
