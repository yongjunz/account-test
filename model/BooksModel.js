const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
  // id: Number,
  id: {
    type: Number,
    required: true,
    unique: true, // 字段值唯一(必须是新建集合才有效，如果在老的有数据的集合中设置了，则无法生效)
  },
  // name: String,
  name: {
    type: String,
    default: '小明', // 默认值
    enum: ['小明', '小红', '小黑'], // 值必须在枚举范围内
  }
})

/**
 * 字段类型 Number String Boolean Array Date Buffer Mixed ObjectId Decimal128
 * */ 

// 创建文档操作模型
const booksModel = mongoose.model('books', booksSchema);

module.exports = booksModel;