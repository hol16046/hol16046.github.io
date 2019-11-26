const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2=document.createElement('h2');
            let dateofbirth = document.createElement('p');
            let placeofbirth = document.createElement('p');
            let portrait = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            dateofbirth.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            placeofbirth.textContent = 'Birthplace: ' + prophets[i].birthplace;
            portrait.setAttribute('src', prophets[i].imageurl);
            portrait.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order)

            card.appendChild(h2);
            card.appendChild(dateofbirth);
            card.appendChild(placeofbirth);
            card.appendChild(portrait);

            document.querySelector('div.cards').appendChild(card);
        }
    });
    