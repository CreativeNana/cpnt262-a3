// Import animals module.
import { animals } from './animals.js';

// Create a `outputHTML` variable.
let outputHTML = '';

// Assign the .gallery element to a `gallery` variable by using `document.querySelector()`. 
const gallery = document.querySelector('.gallery');    

// Loop through `animals` array using `array.forEach()`. 
// Create an image card for each image and append the `<figure>` card to the `outputHTML` variable.
//  <img src="images/${animal.id}-${animal.title.toLowerCase().match(/\w+$/)}.jpg" alt="${animal.title}" width="${animal.width}" height="${animal.height}" >
animals.forEach(function(animal){

  outputHTML += 
    `<figure class="card">
      <img src=${animal.path} alt="${animal.title}" width="${animal.width}" height="${animal.height}" >
      <figcaption> 
        <h1>[${animal.title}]</h1><p>${animal.credit}</p><a href="${animal.url}" alt="${animal.credit}">Original Source</a>
      </figcaption>
    </figure>`;
});

// Add the list of figure cards in `outputHTML` to the `gallery` variable by Using element.innnerHTML.
gallery.innerHTML = outputHTML;
