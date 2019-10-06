'use strict';

function getDogImages() {
  // this function calls on the API
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseImages => displayImages(responseImages))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImages(responseImages) {
  // this function displays the data received from the call
    // logs results to the console
    console.log(responseImages);

    let dogImages = responseImages.body;

    // adds the image to the html
    $('.js-results-img').html(
      `<img src='${dogImages.message}' class='js-results-img'>`)
    
    // displays the html block
    $('#dog-images').toggleClass('hide');
}

function watchForm(dogImages) {
  $('form').submit(function() {
    event.preventDefault();
    //let repeat = $('.number-input').val();
    //let message = responseImages;
    //let images = responseImages.body;
    let i;
    for (i = 0; i <= dogImages.length; i++) {
      displayImages();
    };
  });
}

// I need to look at the array and then find the given number - 1 as the last position in the array to display

/*function handleImages() {
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

$(handleForm);*/

$(watchForm);