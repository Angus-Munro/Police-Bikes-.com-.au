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

	// || Back to top button
	$(window).on("load", () => {
		if (document.documentElement.scrollTop > 450) {
			$(".back-to-top").addClass("back-to-top--visible");
		}
	});
	$(window).on("scroll", () => {
		if (document.documentElement.scrollTop > 450) {
			$(".back-to-top").addClass("back-to-top--visible");
		} else {
			$(".back-to-top").removeClass("back-to-top--visible");
		}
	});

	$(".back-to-top").on("click", () => {
		$("html, body").animate({ scrollTop: 0 }, 800);
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

	// || Contact-Us copy email to clipboard
	$(".contact-us__email-primary-button").on("click", function () {
		let emailAddress = `${$(".contact-us__text-email").text()}`;
		navigator.clipboard.writeText(emailAddress);
		toggleTooltip();
	});

	// Hide tooltip mouseleave event
	$(".contact-us__email-primary-button").on("mouseleave", function () {
		removeTooltip();
	});

	// Toggle Tooltip visible class
	function toggleTooltip() {
		$(".contact-us__email-primary-button-tooltip-text").toggleClass(
			"contact-us__email-primary-button-tooltip-text--visible"
		);
	}
	// Remove Tooltip visible class
	function removeTooltip() {
		$(".contact-us__email-primary-button-tooltip-text").removeClass(
			"contact-us__email-primary-button-tooltip-text--visible"
		);
	}
});
