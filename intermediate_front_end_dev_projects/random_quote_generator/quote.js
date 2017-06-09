$(document).ready(function() {
  $('#getQuote').on('click', function() {
    $.getJSON("/json/quotes.json", function(json) {
      var quotes = new Array("foo bar", "hello, world", "42");

      var rand = quotes[Math.floor( Math.random() * quotes.length )];

      $(".quote").html("Hello, World");

    });
  });
});
