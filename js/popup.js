var buttonPopup = document.querySelector(".hotel-search__button-popup");
var popup = document.querySelector(".hotel-search__popup-form");
var isPopupShow = false;

popup.classList.remove("hotel-search__popup-form--show");

buttonPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!isPopupShow) {
    popup.classList.add("hotel-search__popup-form--show");
    isPopupShow = true;
  } else {
    popup.classList.remove("hotel-search__popup-form--show");
    isPopupShow = false;
  }
});
