const quotes = [
    {
        quoto: "Nothing succeeds like the appearance of success.",
        author: "Christopher Lasch",
    },
    {
        quoto: "You are built not to shrink down to less but to blossom into more.",
        author: "Oprah Winfrey",
    },
    {
        quoto: "It's choice - not chance - that determines your destiny.",
        author: "Jean Nidetch",
    },
    {
        quoto: "Whenever I hear, 'It can't be done,' I know I'm close to success.",
        author: "Michael Flatley",
    },
    {
        quoto: "If you can concentrate always on the present, you'll be a happy man.",
        author: "Paulo Cuelho",
    },
    {
        quoto: "Love is or it ain't. Thin love ain't love at all.",
        author: "Toni Morrison",
    },
    {
        quoto: "It is possible to fail in many ways...while to succeed is possible only in one way.",
        author: "Aristotle",
    },
    {
        quoto: "Energy and persistence conquer all things.",
        author: "Benjamin Franklin",
    },
    {
        quoto: "If you judge people, you have no time to love them.",
        author: "Mother Teresa ",
    },
    {
        quoto: "Love is an act of endless forgiveness, a tender look which becomes a habit.",
        author: "Havelock Ellis",
    },
];

const quote =  document.querySelector("#quote span:first-child");
const author =  document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quoto;
author.innerText = todaysQuote.author;
