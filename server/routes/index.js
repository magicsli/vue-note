var express = require('express');
var router = express.Router();

const { NoteModel, UserModel} = require('../db/module')


/* GET home page. */
// 注册
router.post('/register', function (req, res, next) {
  const { username, password } = req.body
  if (!username || !password) {
    res.send({ code: 1, msg: "数据有误, 请重新输入" })
    return
  } 

  UserModel.findOne({username}, function(err, data){
      if(data){
        res.send({code:1, msg:'此用户已存在,换个名字吧'})
      }else{
        new UserModel({username, password} ).save( (err, user) => {
          if(!err){
            res.cookie('userid', user._id, { maxAge: 1000 * 60 * 60 * 24 })
            res.send({ code: 0, msg: "登记成功" })
          } 

        })
        
      }
  } )
})

// 登录
router.post('/login', function (req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.send({ code: 1, msg: "哪个智障没做数据效验?" })
    return
  }

  UserModel.findOne({ username, password }, function (err, user) {
    if (err || !user) {

       res.send({ code: 1, msg: '找不到此用户' })
       return
    }
    
    const { username, _id} = user;
    NoteModel.find({ username}, (err, data) => {
      if (err) res.send({ code: 1, msg: '连接出错,请联系管理员' });
      res.cookie('userid', _id, { maxAge: 1000 * 60 * 60 * 7 })
      res.send({ code: 0, data })
    })
  })
})


// 添加记录
router.post('/increment', function (req, res, next) {

  const { username, message, toTime } = req.body
  UserModel.findOne({ username }, function (err, data) {
    if ( !data) {
      res.send({ code: 1, msg: '出现未知错误,请重新登录' })
    } else {
      new NoteModel({ 
        username, 
        message, 
        toTime,
        state: false,
        recordTime: Date.now(),
      }).save((err, mes) => {
        if (!err) {
          res.send({ code: 0, msg: "添加成功", mes })
        }
      })
    }
  })
})

// 更新记录
router.post('/update', function (req, res, next) {

  const { username, _id } = req.body
  UserModel.findOne({ username }, function (err, data) {
    if (!data) {
      res.send({ code: 1, msg: '出现未知错误,建议重新登录' })
    } else {
     NoteModel.updateOne( { _id }, {...req.body}, (err, user) => {
        if (!err) {
          res.send({ code: 0, msg: "更新成功" })
        }
      })
    }
  })
})


router.get('/remove', function (req, res, next) {

  const { username, _id } = req.query
  UserModel.findOne({ username }, function (err, data) {
    if (err) {
      res.send({ code: 1, msg: '出现未知错误,建议重新登录' })
    } else {
      const { username } = data
      NoteModel.remove( {username, _id} ,(err, user) => {
        if (!err) {
          res.send({ code: 0, msg: "删除成功" })
        }
      })

    }
  })

})

router.post('/changeState', function (req, res, next) {

  const {_id, state} = req.body
 
  console.log(req.body)
  NoteModel.updateOne({ _id }, {state}, (err, user) => {
    if (user.n) {
          res.send({ code: 0, msg: "更新成功" })
        }else{
          res.send({code:1, mes:'出现意外错误,请自尽' })
        }
      })
  })




// 直接登录获取信息
router.get('/auto', function (req, res, next) {
  if (!req.cookies.userid) {
    res.send({ code: 1, msg: "请先登录" })
    return
  }

  const  _id  = req.cookies.userid;
  UserModel.findOne({ _id }, function (err, user) {
    if (err || !user) {
      req.cookies.userid && res.clearCookie('userid');
      res.send({ code: 1, msg: '用户出错,请重新登录' })
      return
    }

    const { username } = user;
    NoteModel.find({ username }, (err, data) => {
      if (err) res.send({ code: 1, msg: '连接出错,请联系管理员' });
      res.send({ code: 0, data, username })
    })
  })
});
module.exports = router;
