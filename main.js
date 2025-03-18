document.addEventListener("DOMContentLoaded", () => {
	const sidebar = document.querySelector(".sidebar");
	const toggleBtn = document.getElementById("toggle-btn");
	const toggleBtnIcon = document.querySelector(".toggle-btn-icon");
	const hamburgerMenu = document.querySelector(".hamburger-menu");
	const mobileMenu = document.querySelector(".mobile-menu");
	const closeIcon = document.querySelector(".close-toggle-btn");

	toggleBtn.addEventListener("click", () => {
		sidebar.classList.toggle("open");
		toggleBtnIcon.classList.toggle("rotate");
	});

	hamburgerMenu.addEventListener("click", () => {
		mobileMenu.classList.toggle("show");
	});

	closeIcon.addEventListener("click", () => {
		mobileMenu.classList.toggle("show");
	});
});
