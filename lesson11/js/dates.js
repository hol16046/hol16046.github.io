// Get current year for copyright information.
let d = new Date()
var year = d.getFullYear();
document.getElementById("copyrightdate").textContent = year;

// Get last modified date of current document.
var lastmod = document.lastModified;
document.getElementById("modifieddate").textContent = lastmod;

// Responsive Menu
function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// Get Current Date
var today = new Date();
function now(today) {
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	var day = dayNames[today.getDay()];
	var date = today.getDate();
	var month = monthNames[today.getMonth()];
	var year = today.getFullYear();
	var msg = day + ', ' + date + ' ' + month + ' ' + year;
	return msg;
}
var current = document.getElementById('currentDate');
current.innerHTML = now(today);