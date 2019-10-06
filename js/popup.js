var buttonPopup = document.querySelector(".hotel-search__button-popup");
var popup = document.querySelector(".hotel-search__popup-form");
var popupMask = document.querySelector(".hotel-search__wrapper-mask");
var isPopupShow = false;

popup.classList.remove("hotel-search__popup-form--show");
popupMask.classList.add("hotel-search__wrapper-mask--hidden");

buttonPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!isPopupShow) {
    popupMask.classList.remove("hotel-search__wrapper-mask--hidden");
    popup.classList.add("hotel-search__popup-form--show");
    isPopupShow = true;
  } else {
    popupMask.classList.add("hotel-search__wrapper-mask--hidden");
    popup.classList.remove("hotel-search__popup-form--show");
    isPopupShow = false;
  }
});
