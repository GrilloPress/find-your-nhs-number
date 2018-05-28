$(window).load( function(){

  if (sessionStorage.dob) {
    $('input[name="dob-day"]').val(sessionStorage.day);
    $('input[name="dob-month"]').val(sessionStorage.month);
    $('input[name="dob-year"]').val(sessionStorage.year);
  } else {
    $('input[name="dob-day"]').val( "05" );
    $('input[name="dob-month"]').val( "07" );
    $('input[name="dob-year"]').val( 1948 );
  }

})

function submit() {

  var dayComplete, monthComplete, yearComplete = false;
  checkDetails(dayComplete, monthComplete, yearComplete);

}

function checkDetails(isDayComplete, isMonthComplete, isYearComplete) {

  // get values
  var day = $('input[name="dob-day"]').val().trim();
  var month = $('input[name="dob-month"]').val().trim();
  var year = $('input[name="dob-year"]').val().trim();

  var a = checkFieldIsEmpty(day, "dob", "Date of birth", isDayComplete);
  var b = checkFieldIsEmpty(month, "dob", "Date of birth", isMonthComplete);
  var c = checkFieldIsEmpty(year, "dob", "Date of birth", isYearComplete);

  // validate

  // push to session storate

  sessionStorage.day = day;
  sessionStorage.month = month;
  sessionStorage.year = year;
  sessionStorage.dob = day + " " + month + " " + year;

  // redirect to next page

  // console.log( fieldComplete )

  if (a && b && c) {

    window.location.href = "/v1/05-review-your-details";

  } else {

    $( "#link-to-errors" ).append( "<li id='" + "dob" + "-error-link'>" + "<a href='#" + "dob" + "'>" + "" + "Date of birth" + " is missing" + "</a>" + "</li>" );

    $( '#dob' ).addClass("form-row-error-active has-error");
		$('#dob' + '-error').addClass( 'error-message-active' );


    $(" .error-summary ").addClass(" error-message-active ");
    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    $( ".error-summary" ).focus();

  }

}

function checkFieldIsEmpty(fieldValue, fieldName, fieldText, fieldComplete) {

  // fieldName first-name
  // fieldValue firstName
  // fieldText First name

  if (fieldValue == ''){
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
