// Question 2
const gameUrl = "https://api.rawg.io/api/games";



fetch(gameUrl)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        createGames(json);
    })
    .catch((error) => {
        console.log(error);
    });

let html = "";



function createGames(json) {
    const results = json.results;

    results.forEach(function(product) {
        console.log(product);
        html += `<div class="game">
        <h2>${product.name}</h2>
        <img src=${product.background_image} alt="${product.name}">
    </div>`
    })
    displayedContent.innerHTML = html;
};

const displayedContent = document.querySelector(".results");



