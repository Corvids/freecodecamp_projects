$(document).ready(function() {
  //declare variables for location
  var latitude = null;
  var longitude = null;
  var secretkey = 'XXXXXXX' //input secret key here
  var language = 'English';

  // get location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    });
  }

  // get data from API
  // see https://darksky.net/dev/account for secret key
  // dark sky doc: https://darksky.net/dev
  var getWeather = function() {
		return $.ajax({
			url: 'https://api.darksky.net/forecast/',
			data: {
        'key' : secretkey,
				'lat': latitude,
				'lon': longitude,
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
