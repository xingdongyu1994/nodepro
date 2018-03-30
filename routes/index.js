var express = require('express');
var session = require('express-session');
var router = express.Router();
var db = require('../db/dbConfig')
var User = require('../db/userSql')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// // GET login
// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
router.get('/globallogin',function(req, res, next){
  console.log("session" ,req.session.username)
  if(req.session == undefined) {
    res.send('nologin')
    // res.status(401)
  } else {
   res.send('login')
  }
})
router.post('/loginuser',function(req, res, next){
  db.query(User.getUserName, req.body.username,function(err, rows) {
    if(err) {
      res.send(err)
    } else {
      if(rows.length == 0) {
        res.send("nouser")
      } else if(rows[0].password == req.body.password) {
        req.session.username = req.body.username;
        res.send("success")
      }else {
        res.send('err')
    }
    }
  })
})

router.get('/mypage', function(req, res, next) {
  // res.send('111111')
});
// //Post login
// router.post('/login', function(req, res, next){
//   db.query(User.getUserName,req.body.username,function(err, rows){
//      if(err) {
//       res.send(err)
//      } else {
//        if(rows.length == 0) {
//          res.send("用户名不存在")
//        } else if(rows[0].password == req.body.password) {
//          res.send(rows)
//        }else {
//          res.send('密码错误')
//       }
//      }
//   })
// })

// //GET 注册
// router.get('/register', function (req, res, next){
//    res.render('register',{ title: 'Express' })
// })
// //POST 注册
// router.post('/register', function(req, res, next) {
//   console.log("请求0",req.body)
//   // 先查询下
//   db.query(User.getUserName, req.body.username, function(err, rows) {
//     if (err) {
//       res.send(err)
//     }else {
//       if (rows.length != 0) {
//         res.send("用户名已存在，注册失败")
//       }
//     }
//   })
//     // 插入操作
//   db.query(User.insert,[req.body.username, req.body.password],function(err, rows){
// 		if (err) {
//       console.log("报错")
// 			res.send(err);
// 		}else {
// 			res.redirect("/login")
// 		}
// 	})
// })



module.exports = router;
