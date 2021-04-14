let header = document.getElementById('header');
let section = document.getElementById('section');

let file = location.pathname;
file = file.split('/').join('').split('.html').join('.json');

fetch(file)
    .then(response => response.json())
    .then(data => init(data));

function init(json) {
    // Header
    if (true) {
        const H1 = document.createElement("h1");
        H1.textContent = json["name"];
        header.appendChild(H1);

        //create the subheader
        const H1 = document.createElement("Id");
        Id.textContent = json["base_experience"];
        Id.appendChild(Id);


    }

    // Section
    if (true) {
        const STATS = document.createElement('article');
        const STATSDIV = document.createElement('div');
        if (true) {
            const H2 = document.createElement('h2');

            H2.textContent = `Stats`;
            STATSDIV.id = 'div';

            STATS.appendChild(H2);
            STATS.appendChild(STATSDIV);
        }
        for (stat of json['stats']) {
            const DIV = document.createElement('div');
            const H3 = document.createElement('h3');
            const P1 = document.createElement('p');
            const P2 = document.createElement('p');

            H3.textContent = stat['stat']['name'];
            P1.textContent = `Base stat: ${stat['base_stat']}`;
            P2.textContent = `Effort: ${stat['effort']}`;

            DIV.appendChild(H3);
            DIV.appendChild(P1);
            DIV.appendChild(P2);

            STATSDIV.appendChild(DIV);
            STATS.appendChild(STATSDIV);

            STATS.id = 'stats'

            section.appendChild(STATS);
        }
        const TYPES = document.createElement('article');
        if (true) {
            const H2 = document.createElement('h2');

            H2.textContent = `Type`;

            TYPES.appendChild(H2);
        }
        for (type of json['types']) {
            const H3 = document.createElement('h3');
            const P = document.createElement('p');

            let slot = '';
            if (type['slot'] == 1) { slot = 'primary' } else { slot = 'secondary' };
            H3.textContent = slot;
            P.textContent = type['type']['name'];

            TYPES.appendChild(H3);
            TYPES.appendChild(P);

            TYPES.id = 'types'

            section.appendChild(TYPES);
        }
        const ABILITES = document.createElement('article');
        if (true) {
            const H2 = document.createElement('h2');

            H2.textContent = `Abilites`;

            ABILITES.appendChild(H2);
        }
        for (ability of json['abilities']) {
            const P = document.createElement('p');

            P.textContent = ability['name'];

            ABILITES.appendChild(P);

            ABILITES.id = 'abilites'

            section.appendChild(ABILITES);
        }
        if (true) {
            const P1 = document.createElement('p');
            const P2 = document.createElement('p');

            P1.textContent = `Weight: ${json['weight'] / 10}kg`;
            P2.textContent = `Height: ${json['height'] / 10}m`;

            section.appendChild(P1);
            section.appendChild(P2);
        }
    }
}
