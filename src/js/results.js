let colorResults = () => {
    let housingCardValue = document.getElementById('housingValue');

    switch (housingCardValue.value) {
        case 1:
            if (housingCardValue.value <= '1') {
                housingCardValue.classList.add('veryBadScore');
            };
        break;
        case 2:
            if (housingCardValue.value > '1' && housingCardValue.value <= '3') {
                housingCardValue.classList.add('badScore');
            };
        break;
        case 3:
            if (housingCardValue.value > '3' && housingCardValue.value <= '5') {
                housingCardValue.classList.add('mediumScore');
            };
        break;
        case 4:
            if (housingCardValue.value > '5'  && housingCardValue.value <= '7') {
                housingCardValue.classList.add('acceptableScore');
            };
        break;
        case 5:
            if (housingCardValue.value > '7'  && housingCardValue.value <= '9') {
                housingCardValue.classList.add('goodScore');
            };
        break;
        case 6:
            if (housingCardValue.value > '10') {
                housingCardValue.classList.add('veryGoodScore');
            };
        break;
        default:
    };
};

export default colorResults();