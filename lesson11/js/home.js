const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        
        const towns = jsonObject['towns'];
        const relevant = ["Preston", "Soda Springs", "Fish Haven"];
        for (let i = 0; i < towns.length; i++) {
            if(relevant.includes(towns[i].name)) {
                let card = document.createElement('section');
                let text = document.createElement('div');
                let h3=document.createElement('h2');
                let tagline = document.createElement('p');
                let founded = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let townImg = document.createElement('img');

                text.setAttribute('class', 'text')
                h3.textContent = towns[i].name;
                tagline.textContent = towns[i].motto;
                tagline.setAttribute('class', "tagline")
                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                pop.textContent = "Population: " + towns[i].currentPopulation;
                rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall + " inches";
                townImg.setAttribute('src', "images/" + towns[i].photo);
                townImg.setAttribute('alt', towns[i].name);

                card.appendChild(text);
                text.appendChild(h3);
                text.appendChild(tagline);
                text.appendChild(founded);
                text.appendChild(pop);
                text.appendChild(rain);
                card.appendChild(townImg);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });
    