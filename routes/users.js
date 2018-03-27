var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/mypage', function(req, res, next) {
    console.log("地址的是",req)
})

module.exports = router
