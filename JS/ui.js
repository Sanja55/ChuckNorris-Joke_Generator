const randomJoke = document.getElementById("wrapper");

export function renderJoke(joke) {

    const jokeHTML = `<p>${joke}</p>`;
    randomJoke.insertAdjacentHTML("afterend", jokeHTML);
}