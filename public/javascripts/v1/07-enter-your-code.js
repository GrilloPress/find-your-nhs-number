//

var THE_PROTOTYPE_URL = "/v1";

var count = 0;

$(window).ready(function() {
  $( ".alert" ).fadeIn( 1000, function() {
  // Animation complete
  });
});

function resendCode() {

  count++;

  if ( count < 3 ) {

    $( ".alert" ).hide().fadeIn( "slow", function() {
    });

    $( "#resend-notice" ).hide().fadeIn( "slow", function() {
    });

    $('html,body').animate({scrollTop: $('.alert').offset().top -100});

    $('.alert' ).focus();

  } else {

    $( ".alert" ).hide().fadeIn( "slow", function() {
    });

    $( "#resend-notice" ).hide().fadeIn( "slow", function() {
    });

    $( "#resend-code" ).replaceWith( "<a href='" + THE_PROTOTYPE_URL + "/app/04X-contact-us'>Contact us</a>" );
    $('html,body').animate({scrollTop: $('.alert').offset().top -100});
    $('.alert' ).focus();
  }

}

function submit() {

  var code = $('#code-input').val().trim();
  if ( code == '' ){
    $(" .error-summary ").addClass(" error-message-active ").focus();
    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    $('.form-row').addClass("form-row-error-active has-error");
		$('#code-input-error').addClass( 'error-message-active' );
    $( ".alert" ).hide();
    // return false;

  } else if ( code == '666' ) {
    window.location.href = THE_PROTOTYPE_URL + "/error/07X-incorrect-code";
    // if 666 handle as error?

  } else {
    window.location.href = THE_PROTOTYPE_URL + "/08-your-nhs-number";
  }

}
