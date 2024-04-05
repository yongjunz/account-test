var express = require('express');
var router = express.Router();
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapters = new FileSync(__dirname + '/../data/db.json');
const db = lowdb(adapters);
const shortid = require('shortid');
const AccountModel = require('../model/AccountModel');

/* GET home page. */
router.get('/account', function(req, res, next) {

  // 以下为使用mongodb获取数据
  AccountModel.find().sort({time: -1}).then(data => {
    console.log(data)
    res.render('list', { accounts: data })
  }).catch(err => {
    console.error(err)
    res.status(500);
    res.send('读取失败')
  })

  // 以下为使用lowdb获取数据
  // const accounts = db.get('accounts').value();
  // console.log(accounts)
  // res.render('list', {accounts})
});

router.get('/account/create', function(req, res, next) {
  res.render('create')
});

router.post('/account', function(req, res, next) {
  // console.log(req.body)

  const { time } = req.body;

  // 这里是用mongodb
  AccountModel.create({
    ...req.body,
    time: new Date(time)
  }).then(data => {
    res.render('success', { msg: '添加成功', url: '/account' })
  }).catch(err => {
    console.error(err);
    res.render('success', { msg: '添加失败', url: '/account' })
  })

  // 以下使用lowdb操作
  // // 生成id
  // const id = shortid.generate();
  // // 写入文件
  // db.get('accounts').unshift({
  //   id,
  //   ...req.body,
  // }).write()
  // res.render('success', { msg: '添加成功' , url: '/account'})
});

// 删除记录
router.get('/account/:id', function(req, res, next) {
  const id = req.params.id;

  // 以下是使用mongodb
  AccountModel.deleteOne({ _id: id }).then(data => {
    console.log('删除成功', data);
    res.render('success', { msg: '删除成功', url: '/account' })
  }).catch(err => {
    console.error(err)
    res.status(500)
    res.send('删除失败');
  })


  // 以下是使用lowdb
  // const accounts = db.get('accounts').value();
  // console.log(accounts)
  // res.render('list', {accounts})
  db.get('accounts').remove({ id: '233' }).write()
  res.render('success', { msg: '删除成功', url: '/account' })
});

module.exports = router;
