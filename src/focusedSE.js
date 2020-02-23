window.addEventListener('DOMContentLoaded', () => {
	const bgColor = window.getComputedStyle(document.body).backgroundColor;
	const leftSidebar = document.getElementById('left-sidebar');
	const sidebar = document.getElementById('sidebar');
	if (leftSidebar) {
		leftSidebar.style.backgroundColor = bgColor;
	}
	if (sidebar) {
		sidebar.style.backgroundColor = bgColor;
	}
	console.log(bgColor);
})
