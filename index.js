'use strict';

function getDogImages() {
  // this function calls on the API
  //let responseJson;
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImages() {
  // adds the image into html
  //console.log(responseJson);
  $('.dog-img').html(`<img src="${responseJson.message}" class="results-img">`);
  
}

function handleForm() {
  // this function disables the default form behavior
  // it records the number input by the user
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
    responseJson.forEach(displayImages());
    // displays the image-list section
    $('.image-list').toggleClass('hide');
  });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    handleForm();
  });