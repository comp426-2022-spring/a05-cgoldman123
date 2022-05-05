const coin = document.getElementById("coin")
coin.addEventListener("click", flipCoin)

function flipCoin() {
    document.getElementById("coin").innerHTML = "FLIPPED"
    // can possibly take the cors part out. unneeded.
    try{
    fetch('http://localhost:5555/app/flip', {mode: 'cors'}).then(function(response){
        return response.json()
    })
    .then(function(json){
        console.log(json)
        document.getElementById("result").innerHTML = json.flip 
        document.getElementById("quarter").setAttribute("src", + json.flip+".jpg")
    })
    }
    catch (e) {
        document.getElementById("result").innerHTML = e
    }
    
}

const coins = document.getElementById("coins")
coins.addEventListener("submit", flipCoins)

async function flipCoins(event) {
    event.preventDefault();

    const endpoint = "app/flip/coins"
    const url = document.baseURI+endpoint

    const formEvent = event.currentTarget

    try {
        const formData = new formData(formEvent);
        const flips = await sendFlips({url, formData});
        console.log(flips)
        document.getElementById("heads").innerHTML = "Heads: "+flips.summary.heads
        document.getElementById("tails").innerHTML = "Tails: "+flips.summary.tails
    }
    catch (e){
        console.log(e)
    }  
}
async function sendFlips({url, formData}) {
    const plainFormData = Object.fromEntries(formData.entries())
    const formDataJson = JSON.stringify(plainFormData)
    console.log(formDataJson)
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    }

    const response = await fetch(url, options)
    return response.json
}





// Flip one coin and show coin image to match result when button clicked

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails butto
