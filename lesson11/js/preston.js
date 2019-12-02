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


const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=05b93bf3cf5cea8551a4a182b8781249';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);

        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('wind').textContent = jsObject.wind.speed.toFixed(0);
        document.getElementById('humid').textContent = jsObject.main.humidity;
    })

const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=05b93bf3cf5cea8551a4a182b8781249';

fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);

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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
        if(towns[i].name.includes('Preston')) {
            for (let x = 0; x < towns[i].events.length; x++) {
                let event = document.createElement('li');
                event.setAttribute('class', 'event')
                event.textContent = towns[i].events[x];
                document.getElementById('eventsList').appendChild(event);
            }
        }
    }
});