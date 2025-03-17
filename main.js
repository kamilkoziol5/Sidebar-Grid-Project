document.addEventListener("DOMContentLoaded", () => {
	const sidebar = document.querySelector(".sidebar");
	const toggleBtn = document.getElementById("toogle-btn");
	const toggleIcon = toggleBtn.querySelector("i");

	toggleBtn.addEventListener("click", () => {
		sidebar.classList.toggle("open");
		toggleIcon.classList.toggle("rotate");

		// Aktualizacja `title` i `aria-label`
		if (sidebar.classList.contains("open")) {
			toggleBtn.setAttribute("title", "Close Sidebar");
			toggleBtn.setAttribute("aria-label", "Close Sidebar");
		} else {
			toggleBtn.setAttribute("title", "Open Sidebar");
			toggleBtn.setAttribute("aria-label", "Open Sidebar");
		}
	});
});
