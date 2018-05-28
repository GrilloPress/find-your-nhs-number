$(window).load( function(){

  if (sessionStorage.firstName) {

    var first = capitalizeFirstLetter(sessionStorage.firstName);
    var second = capitalizeFirstLetter(sessionStorage.lastName);
    var yourName =  first + " " + second;
    $( "#your-name dd.answer" ).text( yourName );

  }

  if (sessionStorage.gender) {
    $( "#your-gender dd.answer" ).text( capitalizeFirstLetter(sessionStorage.gender) );
  }

  if (sessionStorage.dob) {
    $( "#your-dob dd.answer" ).text( capitalizeFirstLetter(sessionStorage.dob) );
  }

  if (sessionStorage.postcode) {
    $( "#your-postcode dd.answer" ).text( sessionStorage.postcode.toUpperCase() );
  }


})

function submit() {

  if (sessionStorage.firstName === "Fake") {

    window.location.href = "/v1/error/05X-verification-fail";

  } else {

    window.location.href = "/v1/06-verification-option";

  }

}


function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
