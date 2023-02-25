const randomJoke = document.getElementById("random-joke");

export function renderJoke(joke) {

    const jokeHTML = `<p>${joke}</p>`;
    randomJoke.innerHTML = jokeHTML;
}