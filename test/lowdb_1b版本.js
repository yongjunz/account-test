const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapters = new FileSync('db.json');

const db = lowdb(adapters);

db.defaults(({ post: [], user: {} })).write();

// 写入数据
// db.get('post').push({ id: 1, msg: '丰富的' }).write()
// db.get('post').push({ id: 2, msg: '丰富的2' }).write()
// db.get('post').unshift({ id: 3, msg: '丰富的3' }).write()

// 读取数据
// console.log(db.get('post').value())

// 读取单条数据
// const one = db.get('post').find({ id: 1 }).value()
// console.log('读取到的数据:', one)

// 删除数据
// const res = db.get('post').remove({ id: 3 }).write();
// console.log('被删除的数据:', res)

// 更新数据
db.get('post').find({ id: 2 }).assign({ msg: 'change msg' }).write();
