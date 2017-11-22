var temp_celsius;
var temp_fahrenheit;

function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(function (position) {
          var loc = [position.coords.latitude, position.coords.longitude];

          var LATITUDE = loc[0]
          var LONGITUDE = loc[1]

          var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + LATITUDE + "&lon=" + LONGITUDE;

          console.log('this is the weather', url)

          data = $.ajax({
            type: "GET",
            url: url,
            dataType: 'jsonp',
            success: function(data){
              var icon = data.weather[0].icon;
              var location = data.name;
              var desc = data.weather[0].description;

              temp_celsius = data.main.temp;
              temp_fahrenheit = (9/5)*(temp_celsius) + 32;

              $('#location').html(location);
              $('#desc').html(desc);
              $('#temperature').html(temp_fahrenheit.toFixed(2));
              $('#icon').attr("src", icon);
            }
          });
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

$(document).ready(function() {

  getLocation();

  $('#tempswitch').on('click', function() {
    if( $('#deg').hasClass('fahrenheit')) {
      temp = temp_celsius
    } else {
      temp = temp_fahrenheit
    }

    temp = temp.toFixed(2) // show two decimal places only
    $('#temperature').html(temp)
    $('#deg').toggleClass('fahrenheit celsius')

  })
})
