const button = document.querySelector("#button");
const randomJoke = document.querySelector("#random-joke");


const getRandomJoke = () => {

    return fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
        const jokeText = data.value;
        const jokeHTML = `<p>${jokeText}</p>`;
        randomJoke.insertAdjacentHTML("afterend", jokeHTML);
    })
        
}


button.addEventListener("click", getRandomJoke);