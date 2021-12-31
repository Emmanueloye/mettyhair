// Varibles for Nav Tab
let tab = document.querySelector(".tabs");
let tabBtns = document.querySelectorAll(".tab-btn");
let tabpanes = document.querySelectorAll(".tab-pane");

// variables for product sliders
let productImage = document.querySelector(".main-image");
let thumbnails = document.querySelectorAll(".thumb-img");
let currentImage = 0;

// Variable for changing view from Review pane to review form pane
let addReviewBtn = document.querySelector(".add-review-btn");
let reviewPane = document.querySelector(".customer-reviews");
let reviewForm = document.querySelector(".add-review-form");

// Product slider functionality
thumbnails.forEach((item, i) => {
  item.addEventListener("click", function () {
    thumbnails[currentImage].classList.remove("active");
    item.classList.add("active");
    productImage.src = item.src;
    currentImage = i;
  });
});

// Nav Tab Functionality

tab.addEventListener("click", function (e) {
  let id = e.target.dataset.id;
  if (id) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    tabpanes.forEach((pane) => {
      pane.classList.remove("show");
    });
    let element = document.getElementById(id);
    element.classList.add("show");
  }
});

// Changing view to review form pane
addReviewBtn.addEventListener("click", function () {
  reviewPane.classList.remove("show");
  reviewForm.classList.add("show");
});
