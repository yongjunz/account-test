const mongoose = require('mongoose');
const AccountSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: Date,
  type: {
    type: Number,
    default: -1,
  },
  account: {
    type: Number,
    required: true,
  },
  remarks: String,
})

/**
 * 字段类型 Number String Boolean Array Date Buffer Mixed ObjectId Decimal128
 * */ 

// 创建文档操作模型
const AccountModel = mongoose.model('accounts', AccountSchema);

module.exports = AccountModel;