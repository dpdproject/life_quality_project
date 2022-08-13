import '../css/style.css';
import { kebabCase } from "lodash";
import siteUI from "./searchUI";
const axios = require('axios').default;

window.addEventListener("DOMContentLoaded", function() {
    siteUI;
});

const searchElement = document.getElementById('searchElementForm');
const searchField = document.getElementById('searchField');
const cityInfo = document.getElementById('cityInfo');
const housingCardTitle = document.getElementById('housingCardTitle');
const housingCardValue = document.getElementById('housingValue');
const costCardTitle = document.getElementById('costCardTitle');
const costCardValue = document.getElementById('costValue');
const scoreCardTitle = document.getElementById('scoreCardTitle');
const scoreCardValue = document.getElementById('scoreValue');

async function print(data) {
    let i = data;

    cityInfo.innerHTML = `${data.summary}`;

    for (i = 0; i <= 18; i++) {
        if ( i == 0 ) {
            housingCardTitle.innerHTML = `${data.categories[i].name}`;
            housingCardValue.innerHTML = `${data.categories[i].score_out_of_10.toPrecision(2)}`;
        }else if ( i == 1 ) {
            costCardTitle.innerHTML = `${data.categories[i].name}`;
            costCardValue.innerHTML = `${data.categories[i].score_out_of_10.toPrecision(2)}`;
        }else {
            scoreCardTitle.innerHTML = 'City Score';
            scoreCardValue.innerHTML = `${data.teleport_city_score.toPrecision(2)}`;
        }
    };
};

// GET REQUEST
async function get (url, city) {
    try {
        const response = await axios.get(url);

        let cleaningFunction = () => {
            cityInfo.innerHTML = "";
            housingCardValue.innerHTML = "";
            costCardValue.innerHTML = "";
            scoreCardValue.innerHTML = "";
            housingCardTitle.innerHTML = "";
            costCardTitle.innerHTML = "";
            scoreCardTitle.innerHTML = "";
        };
        
        if (response) {
            // CLEAN SEARCH FORM
            searchField.value = "";
            cleaningFunction();

            document.getElementById('firstImg').style.display = ("none");
            document.getElementById('secondImg').style.display = ("none");
            document.getElementById('thirdImg').style.display = ("none");
            
            // GET THE RESULTS
            document.getElementById('cityInfo').style.alignItems = ("");

            print(response.data);
        }
    } catch (error) {
        // CLEAN SEARCH FORM
        searchField.value = "";

        // TOAST FOR ERROR MESSAGE
        let toast = document.createElement('div');
        toast.innerHTML = `We are sorry,` + `<br />` + `City cannot be found.` + `<br />` + `Please, try again!`;
        document.body.appendChild(toast);
        toast.setAttribute('id', 'errorMessageToast');

        let toastMessage = () => {
            let errorMessageToast = document.getElementById('errorMessageToast');
            errorMessageToast.className = "show";
            setTimeout(function(){ errorMessageToast.className = errorMessageToast.className.replace("show", ""); }, 3000);
        };

        if (error.response.status === 404) {
            toastMessage();
        }else {
            cityInfo.innerHTML = `Error ${error.response.status}: Something went wrong. Please, try again!`;
        }
    }
};

// SEARCHING FUNCTIONS
searchElement.addEventListener ("submit", (e) => {
    e.preventDefault();

    let cityInput = kebabCase(searchField.value);
    get(`https://api.teleport.org/api/urban_areas/slug:${cityInput}/scores/`, searchField.value);
});