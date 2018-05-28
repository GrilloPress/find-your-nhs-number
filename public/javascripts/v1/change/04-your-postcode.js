$(window).load( function(){

  if (sessionStorage.postcode) {
    $('input[name="postcode"]').val( sessionStorage.postcode )
  } else {
    $('input[name="postcode"]').val( "LS1 6AE" )
  }

})

function submit() {

  var postCodeComplete = false;
  checkDetails(postCodeComplete);

}

function checkDetails(isPostCodeComplete) {

  // get values
  var postCode = $('input[name="postcode"]').val().trim();

  // validate

  var a = checkFieldIsEmpty(postCode, "postcode", "Postcode", isPostCodeComplete);

  // push to session storate

  sessionStorage.postcode = postCode;

  // redirect to next page

  // console.log( fieldComplete )

  if (a) {

    window.location.href = "/v1/05-review-your-details";

  }

}

function checkFieldIsEmpty(fieldValue, fieldName, fieldText, fieldComplete) {

  // fieldName first-name
  // fieldValue firstName
  // fieldText First name

  if (fieldValue ==''){
		//Adds the validation error css class to the form group and shows the error message
		$( '#' + fieldName ).addClass("form-row-error-active has-error");
		$('#' + fieldName + '-error').addClass( 'error-message-active' );
    $('#' + fieldName + '-error-link').remove(); //remove previous link to error if error still active
    $( "#link-to-errors" ).append( "<li id='" + fieldName + "-error-link'>" + "<a href='#" + fieldName + "'>" + "" + fieldText + " is missing" + "</a>" + "</li>" );
    fieldComplete = false;

    $(" .error-summary ").addClass(" error-message-active ");
    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    $( ".error-summary" ).focus();

    // Needs to have a page title update
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#' + fieldName ).removeClass("has-error");
    $('#' + fieldName ).removeClass("form-row-error-active");
		$('#' + fieldName + '-error').removeClass( 'error-message-active' );
    $('#' + fieldName + '-error-link').remove();
    fieldComplete = true;
	}

  console.log( fieldComplete )
  return fieldComplete;

}
