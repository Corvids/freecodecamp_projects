$(document).ready(function() {
  // generate a new quote on page load
  getNewQuote();
  // generate a new quote on button click
  $('#getQuote').on('click', function() {
    getNewQuote();
  });
});

// function to generate a new quote
function getNewQuote() {
  var returnQuote = '';
  $.getJSON("/json/quotes.json", function(json) {
    json = json.filter(function(val) {
      var rand = Math.floor( Math.random() * val.length );
      return (val[rand]);
    });

    json.format(function(val) {
      returnQuote = val.quote + " -" + val.source;
      return returnQuote;
    });
  });

  $(".quote").html(returnQuote);

};
