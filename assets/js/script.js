// obtaining the search-form id using queryselector
var searchFormEl = document.querySelector('#search-form');

//function handleSearchSubmit as a form
function handleSearchFormSubmit(event) {
  //passing a preventDefault so the page does not refresh 
  event.preventDefault();

  //gathering the values for searchInputVal and formatInputVal 
  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  //checking if there is a value in searchInputval 
  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }
 // add the paramenters searchInputVal and formatInputVal to then become queryString 
  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
 // make it easy to parse out the parameters from the querystring.
  location.assign(queryString);
}


// creating and eventLister for handleSearchFormSubmit 
searchFormEl.addEventListener('submit', handleSearchFormSubmit);
