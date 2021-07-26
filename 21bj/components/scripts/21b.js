const cards = [];
const cardsH = [];
let counter = 0;
let validate = 0;
let validateH = 0;
let cal= 0;

const startGame = document.getElementById("Start");
startGame.addEventListener("click", function(){
    counter++;
    createCards();
    createCardsH();
    document.getElementById("sc").style.visibility = "visible";
    document.getElementById("hc").style.visibility = "visible";
    document.getElementById("fc").innerHTML = "Tu carta es " + cards[0];
    document.getElementById("scc").innerHTML = "Tu carta es " + cards[1];
    document.getElementById("tc").style.visibility = "hidden";
    document.getElementById("Start").disabled = true;
    setTimeout(comparate,3000);
    console.log(counter);
    console.log(cards);
});


const seeCards = document.getElementById("mc");
seeCards.addEventListener("click",function(){
    counter++;
    printCards(counter);
});    

const playAgain = document.getElementById("again");
playAgain.addEventListener("click", function(){
    location.reload();
})

function comparate(){
    sum = cards[0] + cards [1];
    validate = sum + cards[2] + cards [3] + cards[4];
    if(sum<=21 && validate >= 21 ){
        document.getElementById("ac").innerHTML = "Quieres otra carta adicional?";
        document.getElementById("mc").style.visibility = "visible";
        document.getElementById("mcn").style.visibility = "visible";
    }else{
        createCards();
        console.log(cards)
        document.getElementById("ac").innerHTML = "Quieres otra carta adicional?";
        document.getElementById("mc").style.visibility = "visible";
        document.getElementById("mcn").style.visibility = "visible";
    }

}

function createCards(){
    for(let i=0; i<=5; i++){
        cards[i] = Math.floor(Math.random() * 10) + 1;
    }
}

function createCardsH(){
    for(let i=0; i<=5; i++){
        cardsH[i] = Math.floor(Math.random() * 10) + 1;
    }
}

function validateCards(d){
    if(cal > 21){
        document.getElementById("eg").style.visibility = "visible";
        document.getElementById("sc").style.visibility = "hidden";
        document.getElementById("rac").style.visibility = "hidden";
        document.getElementById("mc").style.visibility = "hidden";
        document.getElementById("mcn").style.visibility = "hidden";
        document.getElementById("sc").style.visibility = "hidden";
        document.getElementById("eggs").style.visibility = "visible";
        document.getElementById("eggs").innerHTML = "Has perdido";
        document.getElementById("eg").innerHTML = "Tu total fue: " + cal;
        document.getElementById("fcc").style.visibility = "hidden";
        document.getElementById("csd").style.visibility = "hidden";
        document.getElementById("cs").style.visibility = "hidden";
        document.getElementById("tc").style.visibility="hidden";
        document.getElementById("again").style.visibility = "visible";
    }else if(cal === 21){
        winGame();
    }
    
}

function printCards(counter){
    switch(counter){
        case 2:
            document.getElementById("tc").style.visibility="visible"
            document.getElementById("tc").innerHTML = "Tu carta es " + cards[counter];
            cal += cards[counter] + sum;
            validateCards(cal);
            console.log(cal)
            break;
        case 3:
            document.getElementById("fcc").innerHTML = "Tu carta es " + cards[counter];
            document.getElementById("fcc").style.visibility = "visible";
            cal += cards[counter];
            validateCards(cal);
            console.log(cal)
            break;
        case 4:
            document.getElementById("cs").innerHTML = "Tu carta es " + cards[counter];
            document.getElementById("cs").style.visibility = "visible";
            cal += cards[counter];
            validateCards(cal);
            console.log(counter)
            break;
        case 5:
            document.getElementById("csd").innerHTML = "Tu carta es " + cards[counter];
            document.getElementById("csd").style.visibility = "visible";
            cal += cards[counter];
            validateCards(cal);
            console.log(counter)
            break;
    }
}

const wing = document.getElementById("mcn");
wing.addEventListener("click",function(){
    winGame();
});

function winGame(){
    let validateG;
    console.log(cal);
    validateG = cal + cards[counter+1];
    if(validateG >= 21){
        document.getElementById("eggs").style.visibility = "visible";
        document.getElementById("eg").style.visibility = "visible";
        document.getElementById("eggs").innerHTML = "Has ganado";
        document.getElementById("eg").innerHTML = "Tu total fue: " + cal;
        document.getElementById("again").style.visibility = "visible";
    }
}

function homeVal(){
    let sumH = cardsH[counter-1] + cardsH[counter];
    validateH = sumH + cardsH[counter];
}