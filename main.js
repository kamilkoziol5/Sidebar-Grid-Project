document.addEventListener("DOMContentLoaded", () => {
	const sidebar = document.querySelector(".sidebar");
	const toggleBtn = document.getElementById("toggle-btn");
	const toggleBtnIcon = document.querySelector(".toggle-btn-icon");
	const hamburgerMenu = document.querySelector(".hamburger-menu");
	const mobileMenu = document.querySelector(".mobile-menu");

	toggleBtn.addEventListener("click", () => {
		sidebar.classList.toggle("open");
		toggleBtnIcon.classList.toggle("rotate");
	});

	hamburgerMenu.addEventListener("click", () => {
		mobileMenu.classList.toggle("show");
	});
});
