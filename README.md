# egg-mssql

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mssql.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mssql
[travis-image]: https://img.shields.io/travis/eggjs/egg-mssql.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mssql
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mssql.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mssql?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mssql.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mssql
[snyk-image]: https://snyk.io/test/npm/egg-mssql/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mssql
[download-image]: https://img.shields.io/npm/dm/egg-mssql.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mssql

## Description
This plugin based on [mssql](https://www.npmjs.com/package/mssql).

## Install

```bash
$ npm i egg-mssql --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mssql = {
  enable: true,
  package: 'egg-mssql',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mssql = {
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
```

see [npm/mssql](https://www.npmjs.com/package/mssql#general-same-for-all-drivers) [tedious](https://www.npmjs.com/package/mssql#tedious) for more detail.

## Example

```js
// {app_root}/service/user.js
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

```

## Unit testing
```js
// https://eggjs.org/zh-cn/core/unittest.html
npm run test
```

## Questions & Suggestions

Please open an issue [here](https://github.com/tiandaox/egg-mssql/issues).

## License

[MIT](LICENSE)
