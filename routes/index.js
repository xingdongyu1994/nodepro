var express = require('express');
var session = require('express-session');
var router = express.Router();
var db = require('../db/dbConfig')
var User = require('../db/userSql')
var MyPage = require('../db/mypageSql')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})
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
  db.query(MyPage.getMyPageAll,function(err, rows) {
    if(err) {
      res.send(err)
    } else {
      console.log("shuju",rows)
      res.send(rows)
    }
  })
  // res.send('111111')
})
module.exports = router
