$('document').ready(function(){
  let break_timer = 5;
  let session_timer = 25;
  
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
    if( session_timer >0 ) session_timer -=1;
    $('.session-timer').html(session_timer);
  });
  $( "#session-plus" ).click(function() {
    session_timer +=1;
    $('.session-timer').html(session_timer);
  });
  
  $( "#timer" ).click(function() {
    $("timer").html(session_timer);
  });
  
});