
import { getRandomJoke } from "./data.js";
import { renderJoke } from "./ui.js";

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    getRandomJoke().then(joke => {
        renderJoke(joke);

    });
});