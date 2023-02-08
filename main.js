$(document).ready(function () {
	// || Navbar Hamburger Menu
	$(".hamburger").on("click", mobileMenu);

	function mobileMenu() {
		$(".hamburger").toggleClass("active");
		$(".navbar__menu").toggleClass("active");
	}

	$(".navbar__submenu-link").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".navbar__gallery-dropdown").toggleClass("active");
	});
	//
	// Change to inline Navbar Menu at larger screen sizes
	function removeActiveClassAtWidth() {
		if ($(window).width() >= 600) {
			$(".navbar__menu, .navbar__gallery-dropdown, .hamburger").removeClass(
				"active"
			);
		}
	}
	$(window).on("resize", removeActiveClassAtWidth);
	removeActiveClassAtWidth();
	//
	// Hide navbar dropdown off-click event
	$(".main").on("click", function () {
		$(".navbar__menu, .navbar__gallery-dropdown, .hamburger").removeClass(
			"active"
		);
	});

	// || Before-after Tab Toggle
	$(".before-after-image, .before-after-button").on("click", function () {
		clearInterval(imageTabAutoSwitcher);
		imageTabToggle();
	});

	function imageTabToggle() {
		$(".before-after-image").toggleClass("before-after-image--active");
		$(".before-after-button").toggleClass("before-after-button--active");
	}
	const imageTabAutoSwitcher = setInterval(imageTabToggle, 4000);
});
