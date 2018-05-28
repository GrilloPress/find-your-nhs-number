$(window).load( function(){

  if ( sessionStorage.gender === "female" ) {
    $( "input[name='gender'][value='female']" ).prop("checked", true);
  } else if ( sessionStorage.gender === "male" ) {
    $( "input[name='gender'][value='male']" ).prop("checked", true);
  } else if ( sessionStorage.gender === "non-binary" ) {
    $( "input[name='gender'][value='non-binary']" ).prop("checked", true);
  } else {
    $( "input[name='gender'][value='female']" ).prop("checked", true);
  }

})


function submit() {

  var isGenderComplete = false;
  checkDetails(isGenderComplete);

}


function checkDetails(isGenderComplete) {

  // get values
  var gender = $('input[name="gender"]:checked').val();

    console.log(gender);
    var a = checkFieldIsEmpty(gender, "gender", "Gender", isGenderComplete);
    sessionStorage.setItem('gender', gender);

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

  if (fieldValue == undefined){
		//Adds the validation error css class to the form group and shows the error message
		$( '#' + fieldName ).addClass("form-row-error-active has-error");
		$('#' + fieldName + '-error').addClass( 'error-message-active' );
    $('#' + fieldName + '-error-link').remove(); //remove previous link to error if error still active
    $( "#link-to-errors" ).append( "<li id='" + fieldName + "-error-link'>" + "<a href='#" + fieldName + "'>" + "" + fieldText + " is missing" + "</a>" + "</li>" );
    fieldComplete = false;

    // $( "legend h1" ).addClass(" error-label ");
    $(" .error-message ").addClass(" error-message-active ");
    $(" .has-error ").addClass(" error-message-active ");
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
