import '../css/style.css';
import { kebabCase } from "lodash";
import siteUI from "./searchUI";
const axios = require('axios').default;

window.addEventListener("DOMContentLoaded", function() {
    siteUI;
});

const searchElement = document.getElementById('searchElementForm');
const searchField = document.getElementById('searchField');

async function print(data) {
    let i = data;

    const cityInfo = document.getElementById('cityInfo');
    const housingCardTitle = document.getElementById('housingCardTitle');
    const housingCardValue = document.getElementById('housingValue');
    const costCardTitle = document.getElementById('costCardTitle');
    const costCardValue = document.getElementById('costValue');
    const scoreCardTitle = document.getElementById('scoreCardTitle');
    const scoreCardValue = document.getElementById('scoreValue');

    cityInfo.innerHTML = `${data.summary}`;

    for (i = 0; i <= 18; i++) {
        if ( i == 0 ) {
            housingCardTitle.innerHTML = `${data.categories[i].name}`;
            housingCardValue.innerHTML = `${data.categories[i].score_out_of_10.toPrecision(2)}`;
        }else if ( i == 1 ) {
            costCardTitle.innerHTML = `${data.categories[i].name}`;
            costCardValue.innerHTML = `${data.categories[i].score_out_of_10.toPrecision(2)}`;
        }
    };

    scoreCardTitle.innerHTML = 'City Score';
    scoreCardValue.innerHTML = `${data.teleport_city_score.toPrecision(2)}`;
};

// GET REQUEST
async function get (url, city) {
    try {
        const response = await axios.get(url);
        print(response.data);
    }catch (error) {
        console.log(error);
    }
};

// SEARCHING FUNCTIONS
searchElement.addEventListener ("submit", (e) => {
    e.preventDefault();

    let cityInput = kebabCase(searchField.value);
    get(`https://api.teleport.org/api/urban_areas/slug:${cityInput}/scores/`, searchField.value);
});