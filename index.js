'use strict';

function getDogImages() {
  // this function calls on the API
  //let responseJson;
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);

  for (let i = 0; i <= responseJson.length; i++) {
    // adds imgs to image list html
    function addImage() {
      $('.dog-img').append(`<img src="${responseJson.message}" alt="dog image" class="results-img">`);
    };
    responseJson.forEach(addImage());
    console.log('the for loop is working');
  };

  // displays image list section
  $('.image-list').toggleClass('hide');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    // gets images
    getDogImages();
    //$('.image-list').toggleClass('hide'); 
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
})