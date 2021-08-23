window.addEventListener('DOMContentLoaded', () => {
    //* Открытие меню на моб устройствах
    let navBurger = document.querySelector(".nav-burger");

    navBurger.addEventListener("click", function(e){
        e.preventDefault();

        navBurger.classList.toggle("burger__active");
    });


    //* Открытие мобильного меню
    let menu = document.querySelector(".menu");

    navBurger.addEventListener("click", function(e) {
        e.preventDefault();

        menu.classList.toggle("menu__active");
    });

    //* Переход пунктов меню до их якорных ссылок
    let menuItem = document.querySelectorAll(".menu-list__item");
    let burger = document.querySelector(".nav-burger");

    menuItem.forEach((item) => {
        item.addEventListener("click", function(e) {
            e.preventDefault();

            menu.classList.remove("menu__active");

            //* закрывает бургер при нажатии на один из элементов меню

            burger.classList.remove("burger__active");
        });
    });


    //* модальное окно открытие и закрытие

    const modal = document.getElementById('modal');
    const cases = document.querySelectorAll('.cases-block__item');
    const modalClose = document.querySelector('.modal-close');

    
    function showModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    
    
    function closeModal () {
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
    });


    //* Открытие кейсов скрытых
    
    const casesButton = document.querySelector(".cases-button");
    const casesHidden = document.querySelectorAll(".cases-block__itemHidden");

    casesButton.addEventListener("click", function(e) {
        e.preventDefault();

        casesHidden.forEach((item) => {
            item.classList.toggle("show");
        });
    });


    //* Опрос в модальном окне

    const buttons = document.querySelectorAll(".modal-pool__button");

    const buttonYes = document.getElementById("yes");
    const buttonNo = document.getElementById("no");

    const windowYes = document.querySelector(".modal-windowYes");
    const windowNo = document.querySelector(".modal-windowNo");

    function hidePoolButton(btns) {
        btns.forEach(btn => {
            btn.classList.add('hide');
        });
    }

    buttonYes.addEventListener("click", function(e) {
        e.preventDefault();

        windowYes.classList.add('show');
        hidePoolButton(buttons);
    });

    buttonNo.addEventListener("click", function(e) {
        e.preventDefault();

        windowNo.classList.add('show');
        hidePoolButton(buttons);
    });
});