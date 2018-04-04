$(document).ready(function() {
  let ans;
  let current;
  let reset = false;
  var entry = '';

  $('button').click(function() {
    let entry = $(this).attr("value");
    console.log('you clicked on ' + entry);

    // clear all calculations
    if( entry === 'All Clear' ) {
      ans = null;
      console.log('cleared all')
    // clear the last calculation only
    } else if( entry === 'Clear Entry' ) {
      current = null;
    } else {
      // pressed a calculation key
      if (entry === '/' || entry === '*' || entry === '-' || entry === '+') {
        log = ans;
      } else {
        ans = '';
      }
    }

  });

});
