const cards = [];
let counter = 0;
let validate = 0;
let cal= 0;

const startGame = document.getElementById("Start");
startGame.addEventListener("click", function(){
    counter++;
    createCards();
    document.getElementById("sc").style.visibility = "visible";
    document.getElementById("fc").innerHTML = "Tu carta es " + cards[0];
    document.getElementById("scc").innerHTML = "Tu carta es " + cards[1];
    document.getElementById("tc").style.visibility = "hidden";
    setTimeout(comparate,3000);
    console.log(counter);
    console.log(cards);
});


const seeCards = document.getElementById("mc");
seeCards.addEventListener("click",function(){
    counter++;
    printCards(counter);
});    

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

function validateCards(d){
    if(cal > 21){
        document.getElementById("eg").style.visibility = "visible";
        document.getElementById("sc").style.visibility = "hidden";
        document.getElementById("rac").style.visibility = "hidden";
        document.getElementById("mc").style.visibility = "hidden";
        document.getElementById("mcn").style.visibility = "hidden";
        document.getElementById("sc").style.visibility = "hidden";
        document.getElementById("eg").innerHTML = "Tu total fue: " + cal;
        document.getElementById("egs").style.visibility = "visible";
        document.getElementById("fcc").style.visibility = "hidden";
        document.getElementById("csd").style.visibility = "hidden";
        document.getElementById("cs").style.visibility = "hidden";
        document.getElementById("tc").style.visibility="hidden";
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

}