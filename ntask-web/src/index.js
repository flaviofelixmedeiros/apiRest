var App = require("./app.js");
window.onload = () => {

	var main = document.querySelector("main");
	new App(main).init();


};