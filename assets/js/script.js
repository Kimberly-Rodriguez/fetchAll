var searchFormEl = $('#search-form');

function handleSearchFormSubmit(e) {
  e.preventDefault();

  var searchInputVal = $('#search-input').val();
  var formatInputVal = $('#format-input').val();

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-result.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}



searchFormEl.on('submit', handleSearchFormSubmit); 