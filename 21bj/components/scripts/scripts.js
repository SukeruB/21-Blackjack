let number = Math.floor(Math.random() * 10) + 1;
let number2 = Math.floor(Math.random() * 10) + 1;
let number3 = Math.floor(Math.random() * 10) + 1;
let number4 = Math.floor(Math.random() * 10) + 1;
/*
let number = 10
let number2 = 10
*/
function startg(){
    let firstCard = number;
    let secondCard = number2;

    document.getElementById("fc").innerHTML = "Tu primer carta es " + firstCard;
    document.getElementById("sc").innerHTML = "\nTu primer carta es " + secondCard; 
    if (sum < 21) {
        document.getElementById("ac").innerHTML = "Quieres otra carta adicional?";
        document.getElementById("mc").style.visibility = "visible";
        document.getElementById("mcn").style.visibility = "visible";
        
    } else if(sum === 21) {
        document.body.innerHTML = "<div><h1>Tenemos un ganador</h1><div>";
        document.body.innerHTML = "<button type='button'>Jugar otra vez</button>";
    } else if(sum > 21) {
      //
    }  
}

let sum = number + number2;

function secondC(){
    let thirdCard = number3;
    document.getElementById("tc").innerHTML = "Tu tercer carta es: " + number3 ;
    sum = sum + number3
}
function thirdC(){
    let thirdCard = number3;
    document.getElementById("fdc").innerHTML = "Tu tercer carta es: " + number3 ;
    sum = sum + number3
}
function fourthC(){
    let thirdCard = number3;
    document.getElementById("f").innerHTML = "Tu tercer carta es: " + number3 ;
    sum = sum + number3
}

