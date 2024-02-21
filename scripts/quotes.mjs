export async function quoteApiFetch(quoteUrl) {
    try {
        fetch(quoteUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(quoteData) {
            displayQuotes(quoteData);
        });
    } catch (error) {
        console.log(error)
    }
}


function getRandomQuote(quoteData) {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    // Return the quote at the random index
    return quoteData[randomIndex];
}

function displayQuotes(quoteData) {
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");
    const d = getRandomQuote(quoteData);
    quote.textContent = `${d.text}`;
    author.textContent = `${d.author.slice(0, -10)}`;
}