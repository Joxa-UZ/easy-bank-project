var elModalOpenButton = document.querySelector(".site-header__button");
var elModalOpenlink = document.querySelector(".site-header__box");


elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("site-header__list--active");
});