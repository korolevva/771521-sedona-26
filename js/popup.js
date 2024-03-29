var buttonPopup = document.querySelector(".hotel-search__button-popup");
var popup = document.querySelector(".hotel-search__popup-form");
var popupMask = document.querySelector(".hotel-search__wrapper-mask");

var arivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isPopupShow = false;

popup.classList.remove("hotel-search__popup-form--show");
popupMask.classList.add("hotel-search__wrapper-mask--hidden");

buttonPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!isPopupShow) {
    popupMask.classList.remove("hotel-search__wrapper-mask--hidden");
    popup.classList.add("hotel-search__popup-form--show");
    arivalDate.focus();
    isPopupShow = true;
  } else {
    popupMask.classList.add("hotel-search__wrapper-mask--hidden");
    popup.classList.remove("hotel-search__popup-form--show");
    popup.classList.remove("hotel-search__popup-form--error");
    isPopupShow = false;
  }
});

popup.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!arivalDate.value || !departureDate.value || !adults.value || !children.value) {
    popup.classList.add("hotel-search__popup-form--error");
  } else {
    popup.submit();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("hotel-search__popup-form--show")) {
      popup.classList.remove("hotel-search__popup-form--show");
      isPopupShow = false;
    }
  }
});
