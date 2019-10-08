'use strict';

function getDogImages() {
  // this function calls on the API
  let responseImages;
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImages(responseImages) {
  // adds the image into html
  $('.dog-img').html(`<img src="${responseImages.message[0]}" class="results-img">`);
  // displays the image-list section
  $('.image-list').toggleClass('hide');
}

function handleForm(responseJson) {
  // this function disables the default form behavior
  // it records the number input by the user
  $('form').submit(event => {
    event.preventDefault();
    displayImages();
    
  });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    handleForm();
  });