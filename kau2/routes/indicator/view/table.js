/**
 * New node file
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	  res.render('inicator', { title: 'Express' });
});

module.exports = router;