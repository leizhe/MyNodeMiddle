var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
      title: 'hello express & art-template',
      time: (new Date).toString(),
      list: [
          {
              id: '1',
              name: '张三2'
          },
          {
              id: '2',
              name: '李四'
          }]
  };
  res.render('index', data);
});

module.exports = router;
