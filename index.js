'use strict';

function getDogImages() {
  // this function calls on the API
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImages(responseJson) {
  // this function displays the data received from the call
    console.log(responseJson);
    $('.js-results-img').replaceWith(
      `<img src='${responseJson.message}' class='js-results-img'>`)
    $('#dog-images').toggleClass('hide');
}

function handleImages() {
    getDogImages();
    displayImages();
}

function handleForm() {
  // this function disables the default form behavior
  // it records the number input by the user
  $('form').submit(event => {
    event.preventDefault();
    let repeat = $('.number-input').val();
    let i;
    for (i = 0; i <= repeat; i++) {
        handleImages();
    };
  });
}

$(handleForm);