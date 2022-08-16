import children_Img from "../img/ChildrenImg.png";
import family_Img from "../img/familyImg.png";
import senior_Couple_Img from "../img/seniorCoupleImg.png";

const siteUI = function() {

    // PAGE CONTAINERS
    const mainContainer = document.createElement('div');
    const header = document.createElement('header');
    const headerTitle = document.createElement('div');
    const searchElement = document.createElement('form');
    const searchField = document.createElement('input');
    const btnSearch = document.createElement('button');
    const btnIcon = document.createElement('i');
    const informationContainer = document.createElement('div');
    const cityInfo = document.createElement('div');

    // PAGE TITLE
    let titleContainer = document.createElement('h1');
    let mainTitle = document.createElement('a');

    mainTitle.innerHTML = 'Quality of Life';
    mainTitle.setAttribute('onclick', 'window.location.reload()');
    mainTitle.setAttribute('class', 'mainTitle');

    // INSTRUCTIONS
    const appTitle = document.createElement('h2');
    const appInstructions = document.createElement('p');
    
    cityInfo.style.alignItems = ("center");
    appTitle.innerHTML = "WHAT IS YOUR CITY'S QUALITY OF LIFE?";
    appInstructions.innerHTML = `Search for a city to see its life quality thanks to Teleport datas.<br/>
    The overall <em>city score</em> is expressed on a scale of <strong>1 to 100.</strong><br/>
    The <em>housing</em> and <em>cost of living</em> scores are expressed on a scale of <strong>1 to 10.</strong>`;

    // ATTRIBUTES
    mainContainer.setAttribute('class', 'mainContainer');
    headerTitle.setAttribute('class', 'headerTitle');
    searchElement.setAttribute('class', 'searchElement');
    searchElement.setAttribute('id', 'searchElementForm');
    searchField.setAttribute('placeholder', 'Search for a city')
    searchField.setAttribute('id', 'searchField');
    searchField.setAttribute('type', 'search');
    btnSearch.setAttribute('type', 'submit');
    btnSearch.setAttribute('id', 'btnSearch');
    btnIcon.setAttribute('class', 'fa-regular fa-magnifying-glass');
    informationContainer.setAttribute('class', 'informationContainer');
    cityInfo.setAttribute('class', 'cityInfo');
    cityInfo.setAttribute('id', 'cityInfo');
    appTitle.setAttribute('class', 'appTitle');
    appInstructions.setAttribute('class', 'appInstructions');

    // INFO
    let illustrationDesignerText = document.createElement('a');
    illustrationDesignerText.setAttribute('id', 'illustrationDesignerText');
    illustrationDesignerText.setAttribute('href', 'http://www.freepik.com');
    illustrationDesignerText.innerHTML = `Illustrations designed by pch.vector / Freepik`;

  
    // APPEND CHILDREN
    document.body.appendChild(mainContainer);
    mainContainer.append(header, informationContainer);
    header.append(headerTitle, searchElement);
    searchElement.append(searchField, btnSearch);
    btnSearch.append(btnIcon);
    headerTitle.appendChild(titleContainer);
    titleContainer.appendChild(mainTitle);

    // RESULTS CONTAINERS
    const infoCards = document.createElement('section');
    const housingCard = document.createElement('div');
    const costOfLivingCard = document.createElement('div');
    const scoreCard = document.createElement('div');

        // IMAGES
        let childrenImg = new Image();
        let familyImg = new Image();
        let seniorCoupleImg = new Image();

        childrenImg.src = children_Img;
        familyImg.src = family_Img;
        seniorCoupleImg.src = senior_Couple_Img;
        
        childrenImg.setAttribute('class', 'images');
        familyImg.setAttribute('class', 'images');
        seniorCoupleImg.setAttribute('class', 'images');
        childrenImg.setAttribute('id', 'firstImg');
        familyImg.setAttribute('id', 'secondImg');
        seniorCoupleImg.setAttribute('id', 'thirdImg');

        housingCard.appendChild(childrenImg);
        costOfLivingCard.appendChild(familyImg);
        scoreCard.appendChild(seniorCoupleImg);

    housingCard.setAttribute('class', 'infoCard');
    costOfLivingCard.setAttribute('class', 'infoCard');
    scoreCard.setAttribute('class', 'infoCard');

    let housingCardTitle = document.createElement('h2');
    let housingCardValue = document.createElement('p');
    housingCardValue.setAttribute('id', 'housingValue');
    housingCardTitle.setAttribute('id', 'housingCardTitle');
    housingCardTitle.setAttribute('class', 'scoreTitle');
    let costCardTitle = document.createElement('h2');
    let costCardValue = document.createElement('p');
    costCardValue.setAttribute('id', 'costValue');
    costCardTitle.setAttribute('id', 'costCardTitle');
    costCardTitle.setAttribute('class', 'scoreTitle');
    let scoreCardTitle = document.createElement('h2');
    let scoreCardValue = document.createElement('p');
    scoreCardValue.setAttribute('id', 'scoreValue');
    scoreCardTitle.setAttribute('id', 'scoreCardTitle');
    scoreCardTitle.setAttribute('class', 'scoreTitle');
    
    infoCards.append(housingCard, costOfLivingCard, scoreCard);
    informationContainer.append(cityInfo, infoCards, illustrationDesignerText);
    cityInfo.append(appTitle, appInstructions);
    housingCard.append(housingCardTitle, housingCardValue);
    costOfLivingCard.append(costCardTitle, costCardValue);
    scoreCard.append(scoreCardTitle, scoreCardValue);
}

export default siteUI();