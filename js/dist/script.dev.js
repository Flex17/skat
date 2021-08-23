"use strict";

window.addEventListener('DOMContentLoaded', function () {
  //* Открытие меню на моб устройствах
  var navBurger = document.querySelector(".nav-burger");
  navBurger.addEventListener("click", function (e) {
    e.preventDefault();
    navBurger.classList.toggle("burger__active");
  }); //* Открытие мобильного меню

  var menu = document.querySelector(".menu");
  navBurger.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("menu__active");
  }); //* Переход пунктов меню до их якорных ссылок

  var menuItem = document.querySelectorAll(".menu-list__item");
  var burger = document.querySelector(".nav-burger");
  menuItem.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      menu.classList.remove("menu__active"); //* закрывает бургер при нажатии на один из элементов меню

      burger.classList.remove("burger__active");
    });
  }); //* модальное окно открытие и закрытие

  var modal = document.getElementById('modal');
  var cases = document.querySelectorAll('.cases-block__item');
  var modalClose = document.querySelector('.modal-close');

  function showModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.backgroundColor = '#EEEEEE';
    document.body.style.overflow = '';
  }

  cases[0].addEventListener('click', function () {
    showModal();
  });
  modalClose.addEventListener('click', function () {
    closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });
  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal();
    }
  }); //* Открытие кейсов скрытых

  var casesButton = document.querySelector(".cases-button");
  var casesHidden = document.querySelectorAll(".cases-block__itemHidden");
  casesButton.addEventListener("click", function (e) {
    e.preventDefault();
    casesHidden.forEach(function (item) {
      item.classList.toggle("show");
    });
  }); //* Опрос в модальном окне

  var buttons = document.querySelectorAll(".modal-pool__button");
  var buttonYes = document.getElementById("yes");
  var buttonNo = document.getElementById("no");
  var windowYes = document.querySelector(".modal-windowYes");
  var windowNo = document.querySelector(".modal-windowNo");

  function hidePoolButton(btns) {
    btns.forEach(function (btn) {
      btn.classList.add('hide');
    });
  }

  buttonYes.addEventListener("click", function (e) {
    e.preventDefault();
    windowYes.classList.add('show');
    hidePoolButton(buttons);
  });
  buttonNo.addEventListener("click", function (e) {
    e.preventDefault();
    windowNo.classList.add('show');
    hidePoolButton(buttons);
  });
});