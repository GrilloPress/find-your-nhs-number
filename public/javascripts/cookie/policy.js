// HOLD YOUR NOSE THIS IS UGLY

function submitted_okay() {
  jQuery( "section.first" ).fadeToggle("fade", function() {
    // Animation complete.
    jQuery( "section.second" ).fadeToggle("fade", function() {
    });
  });
  return false;
}
