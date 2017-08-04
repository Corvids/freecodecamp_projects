$(document).ready(function() {
  //declare variables for location
  var latitude = null;
  var longitude = null;
  var language = 'English';
  var sevenDayWeather = [];

  var secretkey = 'da02804ce924f559722bbce05f35661e'; //input secret key here
  var api = 'https://api.darksky.net/forecast/'+secretkey+'/'+latitude+','+longitude;

  // get location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
    // if valid location, get weather forecast
    getWeather();
  }

  // get data from API
  // see https://darksky.net/dev/account for secret key
  // dark sky doc: https://darksky.net/dev/docs/forecast
  var getWeather = $(function (){
    var $data = $('#data');
    $.ajax({
      type: 'GET',
      url: 'https://api.darksky.net/forecast/' + secretkey + '/' + latitude + ',' + longitude
      success: function(weatherData) {
        $.each(weatherData, function(i, item){
          $data.html('<li>temp</li>');
        });
      }
    });
  });

  // temperature conversion
  $('#tempToFahrenheit').click(function() {

  });
  $('#tempToCelsius').click(function() {

  });

  // end document ready
});
