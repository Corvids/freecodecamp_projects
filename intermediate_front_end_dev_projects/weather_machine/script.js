$(document).ready(function() {
  //declare variables for location
  var latitude = 37.7749;
  var longitude = 122.4194;
  var language = 'English';
  var tempType = 'Fahrenheit';
  var secretkey = 'da02804ce924f559722bbce05f35661e'; //input secret key here
  var api = 'https://api.darksky.net/forecast/da02804ce924f559722bbce05f35661e/37.7749,122.4194';

  // get location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
      api = 'https://api.darksky.net/forecast/'+secretkey+'/'+latitude+','+longitude;
      console.log('api calling with...', api);

      // get data from API
      // see https://darksky.net/dev/account for secret key
      // dark sky doc: https://darksky.net/dev/docs/forecast
      $.getJSON(api, function(data){
        console.log('api call was successful!');
        var currentWeather = data.currently;
        console.log(currentWeather);
      });
    }) //endof geolocation
  }

  // temperature conversion
  $('#tempToFahrenheit').click(function() {
    if(tempType = 'Celsius') temp = temp*(9/5) + 32;
  });
  $('#tempToCelsius').click(function() {
    if(tempType = 'Fahrenheit') temp = (temp - 32)*(5/9);
  });

  // end document ready
});
