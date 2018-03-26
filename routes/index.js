var express = require('express');
var router = express.Router();
var db = require('../db/dbConfig')
var User = require('../db/userSql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// GET login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

//Post login
router.post('/login', function(req, res, next){
  db.query(User.getUserName,req.body.username,function(err, rows){
     if(err) {
      res.send(err)
     } else {
       if(rows.length == 0) {
         res.send("用户名不存在")
       } else if(rows[0].password == req.body.password) {
         res.send(rows)
       }else {
         res.send('密码错误')
      }
     }
  })
})

//GET 注册
router.get('/register', function (req, res, next){
   res.render('register',{ title: 'Express' })
})
//POST 注册
router.post('/register', function(req, res, next) {
  console.log("请求0",req.body)
  // 先查询下
  db.query(User.getUserName, req.body.username, function(err, rows) {
    if (err) {
      res.send(err)
    }else {
      if (rows.length != 0) {
        res.send("用户名已存在，注册失败")
      }
    }
  })
    // 插入操作
  db.query(User.insert,[req.body.username, req.body.password],function(err, rows){
		if (err) {
      console.log("报错")
			res.send(err);
		}else {
			res.redirect("/login")
		}
	})
})



module.exports = router;
