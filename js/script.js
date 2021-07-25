// Открытие меню на моб устройствах
let navBurger = document.querySelector(".nav-burger");

navBurger.addEventListener("click", function(e){
    e.preventDefault();

    navBurger.classList.toggle("burger__active");
})


// Открытие мобильного меню
let menu = document.querySelector(".menu");

navBurger.addEventListener("click", function(e) {
    e.preventDefault();

    menu.classList.toggle("menu__active");
});

// Переход пунктов меню до их якорных ссылок
let menuItem = document.querySelectorAll(".menu-list__item");
let burger = document.querySelector(".nav-burger");

menuItem.forEach((item) => {
    item.addEventListener("click", function(e) {
        e.preventDefault();

        menu.classList.remove("menu__active");

        //закрывает бургер при нажатии на один из элементов меню

        burger.classList.remove("burger__active");
    });
});


//модальное окно открытие и закрытие

function windowUp () {
document.getElementById('modal').style.display="block";
}


function windowClose () {
document.getElementById('modal').style.display="none";
document.body.style.backgroundColor = '#EEEEEE';
}


// Открытие кейсов скрытых
 
let casesButton = document.querySelector(".cases-button");
let casesHidden = document.querySelectorAll(".cases-block__itemHidden");

casesButton.addEventListener("click", function(e) {
    e.preventDefault();

    casesHidden.forEach((item) => {
        item.classList.toggle("cases-block__active");
    });
});


// Опрос в модальном окне

let buttons = document.querySelector(".modal-pool__buttons");

let buttonYes = document.getElementById("yes");
let buttonNo = document.getElementById("no");

let windowYes = document.querySelector(".modal-windowYes");
let windowNo = document.querySelector(".modal-windowNo");

buttonYes.addEventListener("click", function(e) {
    e.preventDefault();

    windowYes.style.display="block";
    buttons.style.display="none";
});

buttonNo.addEventListener("click", function(e) {
    e.preventDefault();

    windowNo.style.display="block";
    buttons.style.display="none";
});