document.addEventListener("DOMContentLoaded", () => {
	const sidebar = document.querySelector(".sidebar");
	const toggleBtn = document.getElementById("toggle-btn");
	const toggleBtnIcon = document.querySelector(".toggle-btn-icon");
	const hamburgerMenu = document.querySelector(".hamburger-menu");
	const mobileMenu = document.querySelector(".mobile-menu");
	const closeIcon = document.querySelector(".close-toggle-btn");

	// Toggle Sidebar
	toggleBtn.addEventListener("click", () => {
		sidebar.classList.toggle("open");
		toggleBtnIcon.classList.toggle("rotate");

		// Ukrywanie tooltipów, gdy sidebar jest otwarty
		if (sidebar.classList.contains("open")) {
			document
				.querySelectorAll(".tooltip")
				.forEach(tooltip => (tooltip.style.display = "none"));
		} else {
			document
				.querySelectorAll(".tooltip")
				.forEach(tooltip => (tooltip.style.display = "block"));
		}
	});

	// Toggle Mobile Menu
	hamburgerMenu.addEventListener("click", () => {
		mobileMenu.classList.toggle("show");
	});

	// Close Mobile Menu
	closeIcon.addEventListener("click", () => {
		mobileMenu.classList.toggle("show");
	});
});
