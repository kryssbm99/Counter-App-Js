// document.getElementById("counter").innerText = 5

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the HTML to reflect the new count

function increment() {
    let counterElement = document.getElementById("counter")
    let count = parseInt(counterElement.innerText)
    counterElement.innerText = count + 1
}
// I want to get a random joke from an API every time the button is clicked
// https://api.chucknorris.io/jokes/random
// fetch the joke from the API
// get the joke from the response
// display the joke on the page

function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText = data.value
        })
        .catch(error => console.error('Error fetching joke:', error))
}

document.getElementById("jokeButton").addEventListener("click", function() {
    increment()
    getJoke()
})

// I want to save the joke to a list of jokes using the save joke button
// create a list of jokes
// listen for clicks on the save joke button
// add the joke to the list of jokes when the button is clicked
// display the list of jokes on the page
// clear the list of jokes when the clear jokes button is clicked
let jokesList = []

document.getElementById("jokeSaveButton").addEventListener("click", function() {
    let joke = document.getElementById("joke").innerText
    if (joke) {
        jokesList.push(joke)
        displayJokes()
    }
})

document.getElementById("jokeClearButton").addEventListener("click", function() {
    jokesList = []
    displayJokes()
})

function displayJokes() {
    const jokesContainer = document.getElementById("jokesList")
    jokesContainer.innerHTML = ""
    jokesList.forEach(joke => {
        const jokeItem = document.createElement("li")
        jokeItem.innerText = joke
        jokesContainer.appendChild(jokeItem)
    })
}