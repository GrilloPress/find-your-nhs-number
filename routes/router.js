var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render( 'index' );
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render( 'index' );
});

// GET v1 index page.
router.get('/cookie', function(req, res, next) {
  res.render( 'cookie/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/cookie/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'cookie/' + theView );
});

router.get('/cookie/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'cookie/' + theDir + '/' + theView );
});



// GET v1 index page.
router.get('/v1', function(req, res, next) {
  res.render( 'v1/index' );
});

// GET all v1 URL reqs and push them to a template in the v1 file
// This feels really brittle and hacky...
// No handling of no view found...
router.get('/v1/:view', function(req, res, next) {
  var theView = req.params.view;
  res.render( 'v1/' + theView );
});

router.get('/v1/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.render( 'v1/' + theDir + '/' + theView );
});

router.get('/v1/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.render( 'v1/' + theDir + '/' + theDir2 + '/' + theView );
});

module.exports = router;
