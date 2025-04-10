const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt"
];


const quoteEl = document.querySelector("#quote");
const generateBtn = document.querySelector("#generateBtn");

generateBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteEl.innerText = quotes[randomIndex];
});
