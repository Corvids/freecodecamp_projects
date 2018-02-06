const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
    };

    $.getJSON(makeURL("streams", channel), function(data) {
      let game, status;

      if (data.stream === null || data.stream === undefined) {
        game = "offline";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };

      $.getJSON(makeURL("channels", channel), function(data) {
        let logo, name, description, html;

        if( data.logo != null ) {
          logo = data.logo;
        } else {
          logo = 'http://via.placeholder.com/50x50';
        }

        if( data.display_name != null ) {
          name = data.display_name
        } else {
          name = channel;
        }

        if( status === 'online' ){
          html = '<div class="row ' +
            status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' +
            logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' +
            data.url + '" target="_blank">' +
            name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+
            game + '<span class="hidden-xs">' +
            ': ' + data.status + '</span></div></div>';

          $("#display").prepend(html)
        } else {
          html = '<div class="row ' +
            status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' +
            logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' +
            data.url + '" target="_blank">' +
            name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+
            game + '<span class="hidden-xs">' +
            '</span></div></div>';

          $("#display").append(html);
        }

      });
    });
  });
};

$(document).ready(function() {
  getChannelInfo();
  $(".selector").click(function() {
    $(".selector").removeClass("active");
    $(this).addClass("active");
    var status = $(this).attr('id');
    if (status === "all") {
      $(".online, .offline").removeClass("hidden");
    } else if (status === "online") {
      $(".online").removeClass("hidden");
      $(".offline").addClass("hidden");
    } else {
      $(".offline").removeClass("hidden");
      $(".online").addClass("hidden");
    }
  })
});
