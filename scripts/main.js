import { processInput } from "./input.mjs";
import { handleClick } from "./click.mjs";
import { quoteApiFetch } from "./quotes.mjs";
import { displayVisits } from "./visits.mjs";
import { apiFetch } from "./weather.mjs";

const quoteUrl = "https://type.fit/api/quotes";

document.getElementById("titleInput").addEventListener("input", processInput);

document.addEventListener('click', handleClick);


quoteApiFetch(quoteUrl);
displayVisits();
apiFetch();