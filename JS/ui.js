const randomJoke = document.getElementById("random-joke");

export function renderJoke(joke) {

    const jokeHTML = `<p class="h4 text-success m-4 fw-bolder" >${joke}</p>`;
    randomJoke.innerHTML = jokeHTML;
}