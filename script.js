let header = document.getElementById('header');
let section = document.getElementById('section');

let file = location.pathname;
file = file.split('/').join('').split('.html').join('.json');

fetch(file)
    .then(response => response.json())
    .then(data => init(data));

function init(json) {
    // Deconstruct
    const { base_experience, id, name, stats, types, abilities, ...otherObj } = json
    // Header
    if (true) {
        const H1 = document.createElement("h1");
        H1.textContent = name
        header.appendChild(H1);

        //create the subheader
        const P1 = document.createElement("p");
        P1.textContent = `Base Experience: ${base_experience}`;
        header.appendChild(P1);
    }

    // Section
    if (true) {
        const INFO = document.createElement('article');
        if (true) {
            const P1 = document.createElement('p');
            const P2 = document.createElement('p');

            P1.textContent = `Weight: ${otherObj['weight'] / 10}kg`;
            P2.textContent = `Height: ${otherObj['height'] / 10}m`;

            INFO.appendChild(P1);
            INFO.appendChild(P2);

            INFO.id = 'info'

            section.appendChild(INFO);

            const TYPES = document.createElement('article');
        if (true) {
            const H2 = document.createElement('h2');

            H2.textContent = `Type`;

            TYPES.appendChild(H2);
        }
        for (type of types) {
            const H3 = document.createElement('h3');
            const P = document.createElement('p');
            const DIV = document.createElement('div');

            let slot = '';
            if (type['slot'] == 1) { slot = 'primary' } else { slot = 'secondary' };
            H3.textContent = slot;
            P.textContent = type['type']['name'];
            DIV.classList.add(`${type['type']['name']}`)

            TYPES.appendChild(H3);
            DIV.appendChild(P);
            TYPES.appendChild(DIV);

            TYPES.id = 'types';

            INFO.appendChild(TYPES);

            section.appendChild(INFO);
        }
        }
        const STATS = document.createElement('article');
        const STATSDIV = document.createElement('div');
        if (true) {
            const H2 = document.createElement('h2');

            H2.textContent = `Stats`;
            STATSDIV.id = 'div';

            STATS.appendChild(H2);
            STATS.appendChild(STATSDIV);
        }
        for (stat of stats) {
            const DIV = document.createElement('div');
            const H3 = document.createElement('h3');
            const P1 = document.createElement('p');
            const P2 = document.createElement('p');

            let name = stat['stat']['name'];
            name = name.split('-');
            for (p in name) {
                if (name[p] == 'special') {
                    name[p] = 'Sp'
                }
            }
            name = name.join('-');

            H3.textContent = name;
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
        const ABILITES = document.createElement('article');
        if (true) {
            const H2 = document.createElement('h2');

            H2.textContent = `Possible Abilites: `;

            ABILITES.appendChild(H2);
        }
        let count = 0;
        for (ability of abilities) {
            const P = document.createElement('p');

            count++;
            let separator = '';
            if(count != Object.keys(abilities).length){separator = ','}


            P.textContent = `${ability['name']}${separator}`;

            ABILITES.appendChild(P);

            ABILITES.id = 'abilites'

            section.appendChild(ABILITES);
        }
    }
}
