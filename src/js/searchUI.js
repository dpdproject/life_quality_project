const siteUI = function() {
    const mainContainer = document.createElement('div');
    const header = document.createElement('header');
    const headerTitle = document.createElement('div');
    const searchElement = document.createElement('form');
    const searchField = document.createElement('input');
    const btnSearch = document.createElement('button');
    const informationContainer = document.createElement('div');
    const cityInfo = document.createElement('div');

    mainContainer.setAttribute('class', 'mainContainer');
    headerTitle.setAttribute('class', 'headerTitle');
    searchElement.setAttribute('class', 'searchElement');
    searchElement.setAttribute('id', 'searchElementForm');
    searchField.setAttribute('placeholder', 'Search for a city')
    searchField.setAttribute('id', 'searchField');
    searchField.setAttribute('type', 'search');
    btnSearch.setAttribute('type', 'submit');
    btnSearch.setAttribute('id', 'btnSearch');
    informationContainer.setAttribute('class', 'informationContainer');
    cityInfo.setAttribute('class', 'cityInfo');
    cityInfo.setAttribute('id', 'cityInfo');

    let mainTitle = document.createElement('h1');
    mainTitle.innerHTML = 'Quality of Life';
  

    document.body.appendChild(mainContainer);
    mainContainer.append(header, informationContainer);
    header.append(headerTitle, searchElement);
    searchElement.append(searchField, btnSearch);
    headerTitle.appendChild(mainTitle);

    const infoCards = document.createElement('section');
    const housingCard = document.createElement('div');
    const costOfLivingCard = document.createElement('div');
    const scoreCard = document.createElement('div');

    housingCard.setAttribute('class', 'housingCard');
    costOfLivingCard.setAttribute('class', 'costOfLivingCard');
    scoreCard.setAttribute('class', 'scoreCard');

    infoCards.append(housingCard, costOfLivingCard, scoreCard);
    informationContainer.append(cityInfo, infoCards);

    let cityLink = document.createElement('a');
    cityInfo.appendChild(cityLink);

    let housingCardTitle = document.createElement('h2');
    let housingCardValue = document.createElement('p');
    housingCardValue.setAttribute('class', 'valueFontSize');
    housingCardValue.setAttribute('id', 'housingValue');
    housingCardTitle.setAttribute('id', 'housingCardTitle');
    let costCardTitle = document.createElement('h2');
    let costCardValue = document.createElement('p');
    costCardValue.setAttribute('class', 'valueFontSize');
    costCardValue.setAttribute('id', 'costValue');
    costCardTitle.setAttribute('id', 'costCardTitle');
    let scoreCardTitle = document.createElement('h2');
    let scoreCardValue = document.createElement('p');
    scoreCardValue.setAttribute('class', 'valueFontSize');
    scoreCardValue.setAttribute('id', 'scoreValue');
    scoreCardTitle.setAttribute('id', 'scoreCardTitle');

    housingCard.append(housingCardTitle, housingCardValue);
    costOfLivingCard.append(costCardTitle, costCardValue);
    scoreCard.append(scoreCardTitle, scoreCardValue);
}

export default siteUI();