$(document).ready(function() {
  //declare variables for location
  var latitude = null;
  var longitude = null;
  var secretkey = 'XXXXXXX'; //input secret key here
  var language = 'English';
  var sevenDayWeather = [];

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
  // dark sky doc: https://darksky.net/dev
  var getWeather = function() {
		return $.ajax({
			url: 'https://api.darksky.net/forecast/' + secretkey + '/' + latitude + ',' + longitude,
			data: {
        'latitude': latitude,
        'longitude': longitude,
        'key' : secretkey,
				'lang': language
			},
			dataType: 'json',
		})
	};

  // temperature conversion
  $('#tempToFahrenheit').click(function() {

  });
  $('#tempToCelsius').click(function() {

  });

  // end document ready
});
