import { JSONFilePreset } from 'lowdb/node'


// 读取/创建 db.json
const defaultData = { post: [] };
const db = await JSONFilePreset('db.json', defaultData);

const { post } = db.data;

// 插入数据
// db.data.post.push({
//   id: 1,
//   msg: '奋斗奋斗'
// })
// db.data.post.push({
//   id: 2,
//   msg: '防盗发给对方'
// })
// db.data.post.unshift({
//   id: 3,
//   msg: '奋斗奋斗分的'
// })
// db.data.post.unshift({
//   id: 4,
//   msg: 'forger'
// })

// 更新数据
db.update(({ post }) => {
  const tar = post.find(i => i.id === 4);
  tar.msg = 'change msg'
})

// 查到数据
console.log(post.find(i => i.id === 1))

// 删除数据
db.update(({ post }) => {
  const tarIdx = post.findIndex(i => i.id === 2);
  console.log('tarIdx', tarIdx)
  if (tarIdx !== -1) {
    post.splice(tarIdx, 1)
  }
})



await db.write()