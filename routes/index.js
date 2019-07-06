var express = require('express');
var router = express.Router();
var bat = require('../bat')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', { title: 'Express' });
});

router.get('/getBatList', function(req, res, next) {
  res.json({
    code: 1,
    data: process.env.batList.split(',')
  })
});

router.post('/runBat', function(req, res, next) {
  var batFile = __dirname + "\\..\\public\\bat\\" + req.body.batName;

  console.log(batFile)

  var sucFun = function() {
    res.json({
      code: 1
    })
  }
  var errFun = function(){
    res.json({
      code: 0
    })
  }

  bat.run(batFile, sucFun, errFun);
  
});

module.exports = router;
