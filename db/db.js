module.exports = (success, error = (err) => { console.error(err) }) => {
  const mongoose = require('mongoose');
  const { DBHOST, DBNAME, DBPORT } = require('../config/config')
  // 连接数据库
  // 27017 默认端口
  // acfun 要连接的数据库
  mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);

  // 连接成功回调
  mongoose.connection.once('open', () => {
    console.log('connect success 2')
    success();

  })

  // 连接失败回调
  mongoose.connection.on('error', () => {
    console.log('connect error')
    error()
  })

  // 连接关闭回调
  mongoose.connection.on('close', () => {
    console.log('connect close')
  })
}