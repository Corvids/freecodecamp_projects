$(document).ready(function() {
  //declare variables for location
  var latitude = 37.7749;
  var longitude = 122.4194;
  var language = 'English';
  var sevenDayWeather = [];
  var tempType = 'Fahrenheit';
  var secretkey = 'da02804ce924f559722bbce05f35661e'; //input secret key here

  // get location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    })
  } else {
    console.log('Sorry, we couldn\'t find your location!  We\'ll set a default location instead...');
    latitude = '40.7614';
    longitude = '73.9776';
  };

  var api = 'https://api.darksky.net/forecast/'+secretkey+'/'+latitude+','+longitude;
  console.log('api calling with...', api);

  // get data from API
  // see https://darksky.net/dev/account for secret key
  // dark sky doc: https://darksky.net/dev/docs/forecast
  $.getJSON(api, function(data){
    console.log('api call was successful!');
    var currentWeather = data.currently;
  });

  // temperature conversion
  $('#tempToFahrenheit').click(function() {
    if(tempType = 'Celsius') temp = temp*(9/5) + 32;
  });
  $('#tempToCelsius').click(function() {
    if(tempType = 'Fahrenheit') temp = (temp - 32)*(5/9);
  });

  // end document ready
});
