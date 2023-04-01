let menuMobile = document.querySelector(".nav__items");
let menuButton = document.querySelector(".menu-stripe");
let closeMenu = document.querySelector(".menu-stripe::before");


menuButton.addEventListener('click', function () {
		menuMobile.classList.toggle("active--menu-mobile");
		closeMenu.classList.toggle("menu-stripe-close");
	}

)