function submit() {

  var firstNameComplete = false;
  var lastNameComplete = false;


  checkDetails(firstNameComplete, lastNameComplete);

}

function checkDetails(isFirstNameComplete, isLastNameComplete) {

  // get values
  var firstName = $('input[name="first-name"]').val().trim();
  var lastName = $('input[name="last-name"]').val().trim();

  var a = checkFieldIsEmpty(firstName, "first-name", "First name", isFirstNameComplete);
  var b = checkFieldIsEmpty(lastName, "last-name", "Last name", isLastNameComplete);

  // validate

  // push to session storate

  sessionStorage.firstName = firstName;
  sessionStorage.lastName = lastName;

  // redirect to next page

  // console.log( fieldComplete )

  if (a && b) {

    window.location.href = "/v1/02-your-gender";

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
