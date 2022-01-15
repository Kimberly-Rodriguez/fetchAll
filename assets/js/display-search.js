let resultTextEl = $('#result-text');
let resultContentEl = $('#result-content');
let searchForEl = $('#search-form');

function handleSearchFormSubmit(e){

  //stop reload on page load
  e.preventDefault();

 // obtain all the values from name/date Input
  var nameInput = nameInput.val().trim();
  var dateInput = dateInputEl.val().trim();

  // double check that there is an input if not for it to be console.log
  if(!nameInput || !dateInput) {
    console.log('You need to fillou the form!');
    return;
  }
  // passing arguments to printSkills function 
  printSkills(nameInput,dateInput);

  //rests form
  nameInput.val('');
  dateInput.val('');

}

















searchFormEl.on('submit', handleSearchFormSubmit); 