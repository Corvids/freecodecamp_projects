$(document).ready(function() {
  $('#getQuote').on('click', function() {
    $.getJSON("/json/quotes.json", function(json) {

    });
  });
});
