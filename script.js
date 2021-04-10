let file = location.pathname;
file = file.split('/').join('').split('.html').join('.json');

fetch(file)
    .then(response => response.json())
    .then(data => init(data));

function init(json) {
    const H1 = document.createElement("h1");
    H1.textContent=json["name"];
    header.appendChild(H1)
}