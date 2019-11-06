var searchYouTube = (options, callback = () => {}) => {
  // TODO

  var key = options['key'];
  var query = options['query'] === undefined ? 'dogs' : options['query'];
  var max = options['max'] === undefined ? 5 : options['max'];

  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    cache: false,
    data: {
      key: key,
      q: query,
      part: 'snippet',
      maxResults: max
    },
    dataType: 'json',
    timeout: 5000,
    success: callback
  });

};

export default searchYouTube;
