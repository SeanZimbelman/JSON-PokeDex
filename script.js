let header = document.getElementById('header');
let section = document.getElementById('section');

let file = location.pathname;
file = file.split('/').join('').split('.html').join('.json');

fetch(file)
    .then(response => response.json())
    .then(data => init(data));

function init(json) {

    // Header



    // Section
    console.log(json['stats'][0]['stat']['name']);
    for(stat of json['stats']){
        const ARTICLE = document.createElement('article');
        const H3 = document.createElement('h3');
        const P1 = document.createElement('p');
        const P2 = document.createElement('p');

        H3.textContent = stat['stat']['name'];
        P1.textContent = `Base stat: ${stat['base_stat']}`;
        P2.textContent = `Effort: ${stat['effort']}`;

        ARTICLE.appendChild(H3);
        ARTICLE.appendChild(P1);
        ARTICLE.appendChild(P2);

        section.appendChild(ARTICLE);
    }
}