const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImages = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

// when you click prev button, the previous image will be shown but it should stop at the first image

prevBtn.addEventListener("click", function () {
  // make .active class to the previous image
  // remove .active class from the current image
  galleryImages[currentlySelected].classList.remove("active");
  currentlySelected--;
  galleryImages[currentlySelected].classList.add("active");
  nextBtn.disabled = false;

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
});

// when you click next button, the next image will be shown but it should stop at the last image

nextBtn.addEventListener("click", function () {
  // make .active class to the next
  // remove .active class from the current image
  galleryImages[currentlySelected].classList.remove("active");
  currentlySelected++;
  galleryImages[currentlySelected].classList.add("active");
  prevBtn.disabled = false;

  if (galleryImages.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});
