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

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-mssql 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌


## 开启插件

```js
// config/plugin.js
exports.mssql = {
  enable: true,
  package: 'egg-mssql',
};
```

## 使用场景

- 用于egg插件使连接msssql
- 使用方式查看README.md

## 详细配置

请到 [npm/mssql](https://www.npmjs.com/package/mssql#general-same-for-all-drivers) [tedious](https://www.npmjs.com/package/mssql#tedious) 查看详细配置项说明。

## 单元测试

```js
npm run test
```

## 提问交流

请到 [egg issues](https://github.com/tiandaox/egg-mssql/issues) 异步交流。

## License

[MIT](LICENSE)
