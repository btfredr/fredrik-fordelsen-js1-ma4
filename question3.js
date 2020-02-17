// Question 3
/*
const gameUrl1 = "https://api.rawg.io/api/games/4200";



fetch(gameUrl1)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        createGamesDetails(json);
    })
    .catch((error) => {
        console.log(error);
    });

let html = "";



function createGamesDetails(json) {
    const results = json.results;

    results.forEach(function(product1) {
        console.log(product1);
        html += `<div class="container">
        <h1>${product1.name}</h1>
        <div class="image" style="${product1.background_image}: url('${product1.background_image}')"></div>
        <div class="description">Description goes here</div>
    </div>`
    })
    displayedContent.innerHTML = html;
};

const displayedContent = document.querySelector(".container");
*/

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "question3.html";
}

const creatorsUrl = "https://api.rawg.io/api/games/4200";
const detailUrl = `${creatorsUrl}${id}`;

fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createCreator(json);
    })
    .catch(error){
        console.log(error);
    };

function createGameDetails(json) {
    console.log(json);

    const image = document.querySelector(".background_image.image");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector(".creator-name");
    name.innerHTML = json.name;

    const gameCount = document.querySelector(".game-count");
    gameCount.innerHTML = json.games_count;

    const description = document.querySelector(".creator-description");
    description.innerHTML = json.description;
}