let header = document.getElementById('header');
let section = document.getElementById('section');

let file = location.pathname;
file = file.split('/').join('').split('.html').join('.json');

fetch(file)
    .then(response => response.json())
    .then(data => init(data));

file = file.split('.json').join('')

function init(json) {
    // Deconstruct
    const { base_experience, order, name, stats, types, abilities, ...otherObj } = json
    // Header
    if (true) {
        const DIV1 = document.createElement('div');
        DIV1.id = 'info';
        const DIV2 = document.createElement('div');
        DIV2.id = 'img';


        const H1 = document.createElement("h1");
        // H1.textContent=json["name"];
        H1.textContent = json.name

        const P1 = document.createElement("p");
        P1.textContent = `Base Experience: ${base_experience}`
        P1.id = 'exp';

        const P2 = document.createElement("p");
        P2.textContent = `(${order})`
        P2.id = 'order';

        const IMG = document.createElement('img');
        IMG.src = `images/${file}.png`

        DIV1.appendChild(H1);
        DIV1.appendChild(P1);
        DIV1.appendChild(P2);
        DIV2.appendChild(IMG)
        header.appendChild(DIV1);
        header.appendChild(DIV2);
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
        const DIV1 = document.createElement('div');
        const DIV2 = document.createElement('div');
        if (true) {
            const H2 = document.createElement('h2');

            H2.textContent = `Stats`;
            STATSDIV.id = 'div';
            STATS.id = 'stats';
            DIV1.id = 'row';
            DIV2.id = 'row';

            STATS.appendChild(H2);
            STATSDIV.appendChild(DIV1);
            STATSDIV.appendChild(DIV2);
            STATS.appendChild(STATSDIV);
        }
        let count = 0;
        for (stat of stats) {
            count++

            let check = false;
            if (count > 3) { check = true }

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
                if(name[p] == 'attack') {
                    name[p] = 'atk'
                }
                if(name[p] == 'defense') {
                    name[p] = 'def'
                }
            }
            name = name.join('-');

            H3.textContent = name;
            P1.textContent = `Base stat: ${stat['base_stat']}`;
            P2.textContent = `Effort: ${stat['effort']}`;

            if (check) {
                DIV.appendChild(H3);
                DIV.appendChild(P1);
                DIV.appendChild(P2);
                DIV1.appendChild(DIV);
                STATSDIV.appendChild(DIV1);
                STATS.appendChild(STATSDIV);
                section.appendChild(STATS);
            } else {
                DIV.appendChild(H3);
                DIV.appendChild(P1);
                DIV.appendChild(P2);
                DIV2.appendChild(DIV);
                STATSDIV.appendChild(DIV1);
                STATS.appendChild(STATSDIV);
                section.appendChild(STATS);
            }

            // DIV.appendChild(H3);
            // DIV.appendChild(P1);
            // DIV.appendChild(P2);

            // STATSDIV.appendChild(DIV);
            // STATS.appendChild(STATSDIV);

            // STATS.id = 'stats'

            // section.appendChild(STATS);
        }
        const ABILITES = document.createElement('article');
        if (true) {
            const H2 = document.createElement('h2');

            H2.textContent = `Possible Abilites: `;

            ABILITES.appendChild(H2);
        }
        count = 0;
        for (ability of abilities) {
            const P = document.createElement('p');

            count++;
            let separator = '';
            if (count != Object.keys(abilities).length) { separator = ',' }


            P.textContent = `${ability['name']}${separator}`;

            ABILITES.appendChild(P);

            ABILITES.id = 'abilites'

            section.appendChild(ABILITES);
        }
    }
}

const RIGHT = document.createElement('a');
const RIGHTARROW = document.createElement('img');
const LEFT = document.createElement('a');
const LEFTARROW = document.createElement('img');

RIGHT.id = 'right'
LEFT.id = 'left'

let Rlink = '';
let Llink = '';

let fileNames = ['charmander', 'charmeleon', 'charizard']

for(f in fileNames){
    if(file == fileNames[f]){
        if(f == 2){
            Rlink = `${fileNames[0]}.html`
        } else {
            Rlink = `${fileNames[Number(f) + 1]}.html`
        }
        if(f == 0){
            Llink = `${fileNames[2]}.html`
        } else {
            Llink = `${fileNames[f - 1]}.html`
        }
    }
}

RIGHTARROW.src = `images/arrow.png`;
RIGHT.href = `${Rlink}`;
LEFTARROW.src = `images/arrow.png`;
LEFT.href = `${Llink}`;

RIGHT.appendChild(RIGHTARROW);
LEFT.appendChild(LEFTARROW);

let arrow = document.getElementById('arrow');

arrow.appendChild(RIGHT);
arrow.appendChild(LEFT);