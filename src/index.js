console.log('%c HI', 'color: firebrick')

function myBreeds() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(json => renderBreeds(json))
  }
  
  function renderBreeds(images) {
    const breed = document.querySelector('div')
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
      breed.appendChild(img)
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    myBreeds()
  })



  function dogFamily() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(resp => resp.json())
      .then(json => renderFamily(json))
  }
  
  function renderFamily() {
    let ul = document.querySelector("#dog-breeds");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(""));
    ul.appendChild(li);
  }
 
