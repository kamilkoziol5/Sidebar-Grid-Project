document.addEventListener("DOMContentLoaded", () => {
	const sidebar = document.querySelector(".sidebar");
	const toggleBtn = document.getElementById("toogle-btn");
	const toggleIcon = toggleBtn.querySelector("i"); // Pobieramy ikonę wewnątrz przycisku
	
	toggleBtn.addEventListener("click", () => {
		sidebar.classList.toggle("open");
		toggleIcon.classList.toggle("rotate");
	});
});
