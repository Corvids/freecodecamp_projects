$(document).ready(function() {
  //declare variables for location
  var latitude = null;
  var longitude = null;

  // get location data
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    });
  }

  // temperature conversion
  $('#tempToFahrenheit').click(function() {

  });
  $('#tempToCelsius').click(function() {

  });

});
