import React from 'react';

function Search() {

  let searchFormEl = document.querySelector('#search-form');

  function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    let searchInputVal = document.querySelector('#search-input').value;
    let formatInputVal = document.querySelector('#format-input').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    let queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
  
    location.assign(queryString);
  }
  
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);
  
}




export default search; 