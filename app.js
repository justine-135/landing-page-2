const showMenu = document.querySelector(".menu");
const hideMenu = document.querySelector(".menu2");
const menu = document.querySelector(".menu-container");

showMenu.addEventListener("click", () => {
	menu.style.display = "block";
});

hideMenu.addEventListener("click", () => {
	menu.style.display = "none";
	console.log("clicked");
});
