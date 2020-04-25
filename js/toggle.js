'use strict';

(function () {
  var page = document.querySelector('body');
  var header = document.querySelector('.header');
  var button = header.querySelector('.header__toggle');
  var nav = header.querySelector('.header__nav');

  button.classList.remove('header__toggle--nojs');
  nav.classList.remove('header__nav--nojs');

  function getBtnDesc() {
    if (button.classList.contains('header__toggle--close')) {
      button.attributes['aria-label'].value = 'Закрыть меню';
    } else {
      button.attributes['aria-label'].value = 'Открыть меню';
    }
  }

  function openAndCloseNav() {
    nav.classList.toggle('header__nav--opened');
    nav.classList.toggle('header__nav--closed');
    button.classList.toggle('header__toggle--open');
    button.classList.toggle('header__toggle--close');
  }

  function noScrollBody() {
    page.classList.toggle('modal-open');
  }

  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    openAndCloseNav();
  });

  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    getBtnDesc();
  });

  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    noScrollBody();
  });
})();
