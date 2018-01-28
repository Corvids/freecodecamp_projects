$(document).ready(function() {

  var searchResults = [];
  var html = '';

  function Result(title, snippet) {
    this.title = title;
    this.snippet = snippet;
  }

  function search() {
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
      dataType: 'jsonp',
      type: 'POST',
      headers: {
        'Api-User-Agent': 'Example/1.0'
      },
      success: function(data) {

        $('.results').empty();

        var resArr = data.query.search;

        for (var result in resArr) {
          searchResults.push(new Result(resArr[result].title, resArr[result].snippet));
          html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + resArr[result].title + '"target="_blank"><h3>' + resArr[result].title + '</h3><p>' + resArr[result].snippet + '</p></a></div>';

          $('.results').append(html);
        }
      }
    });

  }

  $('#search').click(function() {
    search();
  });
  $('#search').keyup(function() {
    search();
  });

});
