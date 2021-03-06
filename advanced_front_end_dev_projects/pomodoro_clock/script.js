$('document').ready(function(){
  let break_timer = 5;
  let session_timer = 25;
  let time_left = 25;

  // show on loading page
  $('.break-timer').append(break_timer);
  $('.session-timer').append(session_timer);

  // change session and break times
  $( "#break-minus" ).click(function() {
    if( break_timer > 0) break_timer -=1;
    $('.break-timer').html(break_timer);
  });
  $( "#break-plus" ).click(function() {
    break_timer +=1;
    $('.break-timer').html(break_timer);
  });
  $( "#session-minus" ).click(function() {
    if( session_timer >0 ) {
      session_timer -=1;
      time_left = session_timer;
    }
    $('.session-timer').html(session_timer);
  });
  $( "#session-plus" ).click(function() {
    session_timer +=1;
    time_left = session_timer;
    $('.session-timer').html(session_timer);
  });

  // clicking timer button will start the count-down
  $( "#timer" ).click(function() {
    $("timer").html(session_timer);
  });

  function formatTimer(time) {
    let t = Number(time);
    let time_string = '';

    let hours = Math.floor(t / 3600);
    if( hours > 0 ) time_string += hours.toString() + ' : ';

    let minutes = Math.floor(t % 3600 / 60);
    if( minutes < 10 ) {
      time_string += "0" + minutes.toString() + ' : ';
    } else {
      time_string += minutes.toString + ' : ';
    }

    let seconds = Math.floor(t % 3600 % 60);
    if( seconds < 10 ) {
      time_string += "0" + seconds.toString();
    } else {
      time_string += seconds.toString;
    }

    return time_string;
  }

});
