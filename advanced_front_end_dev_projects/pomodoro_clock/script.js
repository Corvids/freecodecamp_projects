$('document').ready(function(){
  let break_timer = 5;
  let session_timer = 25;
  
  // change session and break times
  $( "#break-minus" ).click(function() {
    break_timer -=1;
  });
  $( "#break-plus" ).click(function() {
    break_timer +=1;
  });
  $( "#session-minus" ).click(function() {
    session_timer -=1;
  });
  $( "#session-plus" ).click(function() {
    session_timer +=1;
  });
  
  
});