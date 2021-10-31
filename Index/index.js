// All Import statements
import { catagory, sliderImages } from "../Data/index.data.js";
// All DOM refferencing
let catagoryparent = document.getElementById("productbox-catagory");
let slider = document.getElementById("slider");
// All Normal Variables
let sliderIndex = 1;

//Code for adding catagory sections rounded-images
catagory.forEach((el) => {
  let img = document.createElement("img");
  img.src = el;
  catagoryparent.appendChild(img);
});
// Code for changing sliders
setInterval(() => {
  slider.src = sliderImages[sliderIndex];
  sliderIndex++;
  if (sliderIndex == sliderImages.length) {
    sliderIndex = 0;
  }
}, 4000);
