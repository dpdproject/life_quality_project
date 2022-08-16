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
let housingCardValue = document.getElementById('housingValue');
const costCardTitle = document.getElementById('costCardTitle');
let costCardValue = document.getElementById('costValue');
const scoreCardTitle = document.getElementById('scoreCardTitle');
let scoreCardValue = document.getElementById('scoreValue');

async function print(data) {
    let i = data;

    cityInfo.innerHTML = `${data.summary}`;

    for (i = 0; i <= 18; i++) {
        if ( i == 0 ) {
            housingCardTitle.innerHTML = `${data.categories[i].name}`;
            housingCardValue.innerHTML = `${data.categories[i].score_out_of_10.toPrecision(2)}`;

            let x = `${data.categories[i].score_out_of_10.toPrecision(2)}`;

            if (x <= 1) {
                housingCardValue.classList.add('veryBadScore', 'finalScore');
            }else if (x > 1 && x <= 3) {
                housingCardValue.classList.add('badScore', 'finalScore');
            }else if (x > 3 && x <= 5) {
                housingCardValue.classList.add('mediumScore', 'finalScore');
            }else if (x > 5  && x <= 7) {
                housingCardValue.classList.add('acceptableScore', 'finalScore');
            }else if (x > 7  && x <= 9) {
                housingCardValue.classList.add('goodScore', 'finalScore');
            }else {
                housingCardValue.classList.add('veryGoodScore', 'finalScore');
            };

        }else if ( i == 1 ) {
            costCardTitle.innerHTML = `${data.categories[i].name}`;
            costCardValue.innerHTML = `${data.categories[i].score_out_of_10.toPrecision(2)}`;

            let x = `${data.categories[i].score_out_of_10.toPrecision(2)}`;

            if (x <= 1) {
                costCardValue.classList.add('veryBadScore', 'finalScore');
            }else if (x > 1 && x <= 3) {
                costCardValue.classList.add('badScore', 'finalScore');
            }else if (x > 3 && x <= 5) {
                costCardValue.classList.add('mediumScore', 'finalScore');
            }else if (x > 5  && x <= 7) {
                costCardValue.classList.add('acceptableScore', 'finalScore');
            }else if (x > 7  && x <= 9) {
                costCardValue.classList.add('goodScore', 'finalScore');
            }else {
                costCardValue.classList.add('veryGoodScore', 'finalScore');
            };

        }else {
            scoreCardTitle.innerHTML = 'City Score';
            scoreCardValue.innerHTML = `${data.teleport_city_score.toPrecision(2)}`;

            let x = `${data.teleport_city_score.toPrecision(2)}`;

            if (x <= 10) {
                scoreCardValue.classList.add('veryBadScore', 'finalScore');
            }else if (x > 10 && x <= 30) {
                scoreCardValue.classList.add('badScore', 'finalScore');
            }else if (x > 30 && x <= 50) {
                scoreCardValue.classList.add('mediumScore', 'finalScore');
            }else if (x > 50  && x <= 70) {
                scoreCardValue.classList.add('acceptableScore', 'finalScore');
            }else if (x > 70  && x <= 90) {
                scoreCardValue.classList.add('goodScore', 'finalScore');
            }else {
                scoreCardValue.classList.add('veryGoodScore', 'finalScore');
            };
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
            housingCardValue.removeAttribute('class');
            costCardValue.innerHTML = "";
            costCardValue.removeAttribute('class');
            scoreCardValue.innerHTML = "";
            scoreCardValue.removeAttribute('class');
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