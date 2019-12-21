const requestData = 'data/templedata.json';

fetch(requestData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing

        const temples = jsonObject['temples'];
        for (let i=0; i < temples.length; i++) {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let addressdiv = document.createElement('div');
            let line1 = document.createElement('address');
            let line2 = document.createElement('address');
            let phone = document.createElement('p');
            let emailp = document.createElement('p');
            let email = document.createElement('a');
            let photodiv = document.createElement('div');
            let photo = document.createElement('img');
            let servicesdiv = document.createElement('div');
            let servicetitle = document.createElement('h4');
            let amenities = document.createElement('ul');
            let historydiv = document.createElement('div');
            let historytitle = document.createElement('h4');
            let history = document.createElement('ul');
            let schedulediv = document.createElement('div');
            let scheduletitle = document.createElement('h4');
            let ordinancetitle = document.createElement('h5');
            let ordinanceschedule = document.createElement('ul');
            let sessiontitle = document.createElement('h5')
            let sessionschedule = document.createElement('ul');
            let schedulenote = document.createElement('p');
            let closeddiv = document.createElement('div');
            let closedtitle = document.createElement('h4');
            let dates = document.createElement('ul');

            card.setAttribute('id', temples[i].id);
            h3.textContent = temples[i].name;
            photodiv.setAttribute ('class', "photo");
            photo.setAttribute('src', "images/temples/" + temples[i].photo);
            photo.setAttribute('alt', temples[i].name + " Temple")
            addressdiv.setAttribute('class', "address");
            line1.textContent = temples[i].addressLine1;
            line2.textContent = temples[i].addressLine2;
            phone.setAttribute('class', "phone");
            phone.textContent = "Phone: " + temples[i].phone;
            email.setAttribute('class', "email");
            email.setAttribute('href', "mailto:#");
            email.textContent = temples[i].email;
            servicesdiv.setAttribute('class', "services")
            servicetitle.textContent = "Services:";
            for (let x = 0; x < temples[i].services.length; x++) {
                let service = document.createElement('li');
                service.textContent = temples[i].services[x];
                amenities.appendChild(service);
            }
            historydiv.setAttribute('class', "history")
            historytitle.textContent = "History:";
            for (let v = 0; v < temples[i].history.length; v++) {
                let dates = document.createElement('li');
                dates.textContent = temples[i].history[v];
                history.appendChild(dates);
            }
            closeddiv.setAttribute('class', "closed");
            closedtitle.textContent = "Temple Closures";
            for (let w = 0; w < temples[i].closed.length; w++) {
                let closedate = document.createElement('li');
                closedate.textContent = temples[i].closed[w];
                dates.appendChild(closedate);
            }
            schedulediv.setAttribute('class', "schedule");
            scheduletitle.textContent = "Schedule:";
            ordinancetitle.textContent = "Ordinances";
            for (let t = 0; t < temples[i].ordinances.length; t++) {
                let ordinancetimes = document.createElement('li');
                ordinancetimes.textContent = temples[i].ordinances[t];
                ordinanceschedule.appendChild(ordinancetimes);
            }
            sessiontitle.textContent = "Sessions:"
            for (let s = 0; s < temples[i].sessions.length; s++) {
                let sessiontimes = document.createElement('li');
                sessiontimes.textContent = temples[i].sessions[s];
                sessionschedule.appendChild(sessiontimes);
            }
            schedulenote.textContent = "Please call " + temples[i].phone + " to schedule living ordinances (own endowment or sealing) or group visits.";   

            card.appendChild(h3);
            card.appendChild(photodiv);
            photodiv.appendChild(photo);
            card.appendChild(addressdiv);
            addressdiv.appendChild(line1);
            addressdiv.appendChild(line2);
            card.appendChild(phone);
            card.appendChild(emailp);
            emailp.appendChild(email);
            card.appendChild(servicesdiv);
            servicesdiv.appendChild(servicetitle)
            servicesdiv.appendChild(amenities);
            card.appendChild(schedulediv);
            schedulediv.appendChild(scheduletitle);
            schedulediv.appendChild(ordinancetitle);
            schedulediv.appendChild(ordinanceschedule);
            schedulediv.appendChild(sessiontitle);
            schedulediv.appendChild(sessionschedule);
            schedulediv.appendChild(schedulenote);
            card.appendChild(historydiv);
            historydiv.appendChild(historytitle);
            historydiv.appendChild(history);
            card.appendChild(closeddiv);
            closeddiv.appendChild(closedtitle);
            closeddiv.appendChild(dates);

            document.querySelector('div.cards').appendChild(card);
        }
    });

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?lat=43.0391&lon=77.2371&units=imperial&APPID=05b93bf3cf5cea8551a4a182b8781249';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        console.table(jsObject); //temporary checking for valid response and data parsing

        const item = jsObject;
        let weather = document.createElement('div');
        let weatherphoto = document.createElement('img');
        let temp = document.createElement('p');
        weather.setAttribute('class', "weather");
        weatherphoto.setAttribute('src', 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png');
        weatherphoto.setAttribute('alt', item.weather[0].description + ' icon');
        temp.textContent = item.main.temp.toFixed(0) + String.fromCharCode(176) + " F";

        weather.appendChild(weatherphoto);
        weather.appendChild(temp);

        document.querySelector('#palmyra div').appendChild(weather);
        
    });

const requestPA = 'https://api.openweathermap.org/data/2.5/weather?lat=39.9591&lon=75.1682&units=imperial&APPID=05b93bf3cf5cea8551a4a182b8781249';

fetch(requestPA)
    .then(function (response) {
        return response.json();
    })
    .then(function (paObject) {
        console.table(paObject); //temporary checking for valid response and data parsing

        const item = paObject;
        let weather = document.createElement('div');
        let weatherphoto = document.createElement('img');
        let temp = document.createElement('p');
        weather.setAttribute('class', "weather");
        weatherphoto.setAttribute('src', 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png');
        weatherphoto.setAttribute('alt', item.weather[0].description + ' icon');
        temp.textContent = item.main.temp.toFixed(0) + String.fromCharCode(176) + " F";

        weather.appendChild(weatherphoto);
        weather.appendChild(temp);

        document.querySelector('#philadelphia div').appendChild(weather);
        
    });

const requestIL = 'https://api.openweathermap.org/data/2.5/weather?lat=40.5505&lon=91.3844&units=imperial&APPID=05b93bf3cf5cea8551a4a182b8781249';

fetch(requestIL)
    .then(function (response) {
        return response.json();
    })
    .then(function (ilObject) {
        console.table(ilObject); //temporary checking for valid response and data parsing

        const item = ilObject;
        let weather = document.createElement('div');
        let weatherphoto = document.createElement('img');
        let temp = document.createElement('p');
        weather.setAttribute('class', "weather");
        weatherphoto.setAttribute('src', 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png');
        weatherphoto.setAttribute('alt', item.weather[0].description + ' icon');
        temp.textContent = item.main.temp.toFixed(0) + String.fromCharCode(176) + " F";

        weather.appendChild(weatherphoto);
        weather.appendChild(temp);

        document.querySelector('#nauvoo div').appendChild(weather);
        
    });

const requestCA = 'https://api.openweathermap.org/data/2.5/weather?lat=37.8065&lon=122.2247&units=imperial&APPID=05b93bf3cf5cea8551a4a182b8781249';

    fetch(requestCA)
    .then(function (response) {
        return response.json();
    })
    .then(function (caObject) {
        console.table(caObject); //temporary checking for valid response and data parsing

        const item = caObject;
        let weather = document.createElement('div');
        let weatherphoto = document.createElement('img');
        let temp = document.createElement('p');
        weather.setAttribute('class', "weather");
        weatherphoto.setAttribute('src', 'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png');
        weatherphoto.setAttribute('alt', item.weather[0].description + ' icon');
        temp.textContent = item.main.temp.toFixed(0) + String.fromCharCode(176) + " F";

        weather.appendChild(weatherphoto);
        weather.appendChild(temp);

        document.querySelector('#oakland div').appendChild(weather);
        
    });