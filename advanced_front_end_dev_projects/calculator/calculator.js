$(document).ready(function() {
  let ans;
  let current;
  
  $('button').click(function() {
    let entry = $(this).attr("value");
    console.log('you clicked on ' + entry);
    if( entry === 'All Clear' ) {
      ans = null;
      console.log('cleared all')
    } else if( entry === 'Clear Entry' ) {
      current = null;
    } else {
      
    }
    
  });
  
});