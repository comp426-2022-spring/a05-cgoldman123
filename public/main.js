
const coin = document.getElementById("coin")
coin.document.addEventListener("click", flipCoin)
function flipCoin() {
    // can possibly take the cors part out. unneeded.
    fetch('http://localhost:5555/app/flip', {mode: 'cors'}).then(function(response){
        return response.json()
    })
    .then(function(json){
        console.log(json)
        document.getElementById("result").innerHTML = json.flip ;
        document.getElementById("quarter").setAttribute("src", + json.flip+".jpg")
    })
    document.getElementById("coin") = "FLIPPED"
}

const coins = document.getElementById("coins")
coins.document.addEventListener("submit", flipCoins)
function flipCoins() {
    // can possibly take the cors part out. unneeded.
    fetch('http://localhost:5555/app/flips/:number', {mode: 'cors'}).then(function(response){
        return response.json()
    })
    .then(function(json){
    })
        
}


// Flip one coin and show coin image to match result when button clicked

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
