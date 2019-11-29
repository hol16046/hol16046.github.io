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

// Pancakes Banner
function pancakes() {
	var date = new Date();
	var banner = document.getElementById("pancakesBanner");
	var day = date.getDay();
	if (day == 5) {
		banner.style.display = "block";
	} else {
		banner.style.display = "none";
	}
}


const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=05b93bf3cf5cea8551a4a182b8781249';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('wind').textContent = jsObject.wind.speed.toFixed(0);
        document.getElementById('humid').textContent = jsObject.main.humidity;
    })

const apiURLforecast = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=05b93bf3cf5cea8551a4a182b8781249';

fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var num = 1;

        jsObject.list.forEach(getData);

        function getData(item){
            if (item.dt_txt.includes("18:00:00")) {
                document.getElementById('day' + num + 'pic').setAttribute('src', 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png');
                document.getElementById('day' + num + 'pic').setAttribute('alt', item.weather[0].description + ' icon');
                document.getElementById('day' + num + 'temp').textContent = item.main.temp.toFixed(0);
                num++;
            }
        }

    })

    var days = new Array(14);
    days[0] = "Sun";
    days[1] = "Mon";
    days[2] = "Tue";
    days[3] = "Wed";
    days[4] = "Thu";
    days[5] = "Fri";
    days[6] = "Sat";
    days[7] = "Sun";
    days[8] = "Mon";
    days[9] = "Tue";
    days[10] = "Wed";
    days[11] = "Thu";
    days[12] = "Fri";
    days[13] = "Sat";

    var first = days[d.getDay() + 1];
    var second = days[d.getDay() + 2];
    var third = days[d.getDay() + 3];
    var fourth= days[d.getDay() + 4];
    var fifth = days[d.getDay() + 5];

    document.getElementById('day1').textContent = first;
    document.getElementById('day2').textContent = second;
    document.getElementById('day3').textContent = third;
    document.getElementById('day4').textContent = fourth;
    document.getElementById('day5').textContent = fifth;
