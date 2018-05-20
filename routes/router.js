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
// // // // // // //
// POST
// // // // // // //
router.post('/v1/01-your-name', function(req, res, next) {

  res.render( 'v1/01-your-name' );
});

router.post('/v1/02-your-gender', function(req, res, next) {

  res.render( 'v1/02-your-gender' );
});

router.post('/v1/03-your-date-of-birth', function(req, res, next) {

  res.render( 'v1/03-your-date-of-birth' );
});

router.post('/v1/04-your-postcode', function(req, res, next) {

  res.render( 'v1/04-your-postcode' );
});

router.post('/v1/05-review-your-details', function(req, res, next) {

  res.render( 'v1/05-review-your-details' );
});

router.post('/v1/06-verification-option', function(req, res, next) {

  res.render( 'v1/06-verification-option' );
});

router.post('/v1/07-enter-your-code', function(req, res, next) {

  res.render( 'v1/07-enter-your-code' );
});

router.post('/v1/08-your-nhs-number', function(req, res, next) {

  res.render( 'v1/08-your-nhs-number' );
});


module.exports = router;
