// getting bank and card div by their id
const bank = document.getElementById('bank');
const card = document.getElementById('card');
// getting logo used on div by their id
const bankLogo = document.getElementById('logoBank');
const cardLogo = document.getElementById('logoCard');
// boolean values to represent of the div is hidden or shown
let showBank = false;
let showCard = false;

// function that is called on button click
// if div is hidden then it is changed to show
// else if it is shown then it is changed to hidden
function showhideBank() {
    if(showBank) {
        bank.classList.replace('show','hide');
        bankLogo.setAttribute('src','./Imgs/plus-icon.png');
        showBank = false;

    } else {
        bank.classList.replace('hide','show');
        bankLogo.setAttribute('src','./Imgs/minus-icon.png');
        showBank = true;

        card.classList.replace('show','hide');
        cardLogo.setAttribute('src','./Imgs/plus-icon.png');
        showCard = false;
    }
}

// function that is called on button click
// if div is hidden then it is changed to show
// else if it is shown then it is changed to hidden
function showhideCard() {
    if(showCard) {
        card.classList.replace('show','hide');
        cardLogo.setAttribute('src','./Imgs/plus-icon.png');
        showCard = false;

    } else {
        card.classList.replace('hide','show');
        cardLogo.setAttribute('src','./Imgs/minus-icon.png');
        showCard = true;

        bank.classList.replace('show','hide');
        bankLogo.setAttribute('src','./Imgs/plus-icon.png');
        showBank = false;
    }
}
