'use strict';

function getDogImages() {
  // this function calls on the API
  //let responseJson;
  fetch(`https://dog.ceo/api/breeds/image/random/${$('.number-input').val()}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);

  for (let i = 0; i < responseJson.message.length; i++) {
    // adds imgs to image list html
    $('.dog-img').append(`<img src="${responseJson.message[i]}" alt="dog image" class="results-img">`);

  console.log('the for loop is working');
  };

  // displays image list section
  $('.image-list').removeClass('hide');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    // gets images
    $('.dog-img').empty();
    getDogImages();
    //$('.image-list').toggleClass('hide'); 
  })
}

/*function resetButton() {
  $('.reset').click(event => {
    event.preventDefault();
    location.reload();
  })
}*/

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  //resetButton();
})