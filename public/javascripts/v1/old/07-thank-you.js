$(window).load(function() {
  thankYouMessage();
  $( ".alert" ).fadeIn( 1000, function() {
  })
});

var THE_PROTOTYPE_URL = "/v1";

function thankYouMessage() {
  var pref = sessionStorage.singlePref;

  // This is now an ugly hack...

  if ( pref == "true" ) {
    console.log("true");
    $( "#shared" ).removeClass( "util-visuallyhidden" );

  } else {
    console.log("false");
    $( "#not-shared" ).removeClass( "util-visuallyhidden" );
  }

};
