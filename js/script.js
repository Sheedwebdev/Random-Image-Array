// Part1: Declare all variables that will access elements on the webpage
const button = document.querySelector("button"); //step1: 
const authorSpan = document.querySelector(".author"); //step2:
const imgDiv = document.querySelector(".image-container"); //step3:
const img = document.querySelector(".img"); //step4:

//  Part2: Declare a variable for the asynchronous function 
const getImage = async function () { //step4:
  const res = await fetch("https://picsum.photos/v2/list?limit=100"); //step5: Declare a variable for that represents fetching the data from the photos API
  const images = await res.json(); //step6: Declaring a variable that represents interpreting that data as an array of objects (each object is an image object)
  //console.log(images);  //step7: Confirming if an array of objects (images) is displayed in the console
  selectRandomImage(images); //step13: Concurrently randomly selects and displays an image from the array of images 
};

//  Part3: Declare a variable that will select a random image
const selectRandomImage = function (images) { //step8:
  const randomIndex = Math.floor(Math.random() * images.length);  //step9: Choosing a random index from 0 to 99
  //console.log(randomIndex);  //step10: Confirming if a random index between 0 and 99 appears in the console
  const randomImage = images[randomIndex];  //step11: Declaring a variable that represents a random element (object) in the array of objects (named images) 
  // console.log(randomImage);  //step12: Confirming if a random object (image) is displayed in the console
  displayImage(randomImage); //step20: displaying an image with author info
};


// Part4: Declare a variable that will display the selected random image
const displayImage = function (randomImage) { //step14:
  const author = randomImage.author; //step15:
  const imageAddress = randomImage.download_url; //step16:
  authorSpan.innerText = author; //step17:
  img.src = imageAddress; //step18:
  imgDiv.classList.remove("hide"); //step19:
};

// Part5: Create a click event that will display the random image
button.addEventListener("click", function() { //step21:
  getImage(); //step22:
});






