const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  const res = await fetch("http://picsum.photos/v2/list?limit=100");
  const images = await res.json(); //  Declaring a variable that represents an array of objects (each object is an image object)
  selectRandomImage(images);
  // console.log(images);  Confirming if an array of objects (images) is displayed in the console
  
};

const selectRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);  // Choosing a random index from 0 to 99
  // console.log(randomIndex);  Confirming if a random index between 0 and 99 appears in the console
  const randomImage = images[randomIndex];  // Declaring a variable that represents a random element (object) in the array of objects (named images) 
  // console.log(randomImage);  // Confirming if a random object (image) is displayed in the console
  displayImage(randomImage);
};

const displayImage = function (randomImage) {
  const author = randomImage.author;
  const imageAddress = randomImage.download_url;
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");
};

button.addEventListener("click", function() {
  getImage();
});






