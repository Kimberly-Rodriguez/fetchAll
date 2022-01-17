var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');



function getParams() {
  
  var searchParamsArr = document.location.search.split('&');
 
  var query = searchParamsArr[0].split('=').pop();
  var format = searchParamsArr[1].split('=').pop();

  searchApi(query, format);
}


function searchApi(query, format) {
  var locQueryUrl = 'https://www.loc.gov/search/?fo=json';

  if (format) {
    locQueryUrl = 'https://www.loc.gov/' + format + '/?fo=json';
  }

  locQueryUrl = locQueryUrl + '&q=' + query;

  
}










getParams();