const cards = [];
const cardsValue= [];
const playerValueCards = document.querySelector('#playerCards');

let counter = 0;
let counterOfPLayerCards =0;
let counterOfHouseCards =0;
let sum ;

const startGame = document.getElementById("Start");
startGame.addEventListener("click", function(){
    counter++;
    createCards(0);
    createCards(1);
    viewPlayerCards();
});

const yesButton = document.getElementById("yesC");
yesButton.addEventListener("click",function(){
    counter++;
    viewPlayerCards();
});

const noButton = document.getElementById("noC");
noButton.addEventListener("click", function(){

});

function createCards(ad){
    for(let i=0; i<=5; i++){
        cards[i] = Math.floor(Math.random() * 10) + 3;
    }
    cardsValue[ad] = [cards[0],cards[1],cards[2],cards[3],cards[4],cards[5]];
    console.log(cardsValue[0]);
}

function impressPlayerCard(valueC){
    const card = document.createElement("p");
    card.className = "section2-div2-p";

    card.textContent = `Tu carta es: ` + cardsValue[0][valueC];
    card.textContent = 'Tu carta es: ' + cardsValue[0][valueC];
    console.log(card);
    playerValueCards.append(card);
    
}

function viewPlayerCards(){
    switch(counter){
        case 1:
            impressPlayerCard(counter-1);
            impressPlayerCard(counter);
            document.querySelector("#rac").style.visibility = "visible";
            sum = cardsValue[0][0] + cardsValue[0][1];
            counterOfPLayerCards += sum;
            console.log(counterOfPLayerCards);
            validateCards();
            break;
        case 2:
            impressPlayerCard(counter);
            counterOfPLayerCards += cards[counter];
            console.log(counterOfPLayerCards)
            validateCards();
            break;
        case 3:
            impressPlayerCard(counter);
            counterOfPLayerCards += cards[counter];
            console.log(counterOfPLayerCards)
            validateCards();
            break;
        case 4:
            impressPlayerCard(counter);
            counterOfPLayerCards += cards[counter];
            console.log(counterOfPLayerCards)
            validateCards();
            break;
        case 5:
            impressPlayerCard(counter);
            counterOfPLayerCards += cards[counter];
            validateCards();
            break;
    }
}

function validateCards(){
    if(sum>21){
        endGame(2);
    }else if(counterOfPLayerCards>21){
        endGame(2);
    }else if(counterOfPLayerCards===21){
        endGame(1);
    }
}

function endGame(state){
    const endgame = document.createElement("h2");
    const zone = document.querySelector("#EndGame");
    switch(state){
        case 1:
            endgame.textContent = "Felicidades has ganado";
            zone.append(endgame);
            document.querySelector("#rac").style.visibility = "hidden";
            break;
        case 2:
            endgame.textContent = "Has perdido con un total de " + counterOfPLayerCards;
            zone.append(endgame);
            document.querySelector("#rac").style.visibility = "hidden";
            break;
        case 3:
            endgame.textContent = "Ambos ganan";
            zone.append(endgame);
            document.querySelector("#rac").style.visibility = "hidden";
            break;
    }
}