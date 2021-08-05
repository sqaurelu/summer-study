const quotes = [{ quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
{ quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe", },
{ quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein", },
{ quote: "So many books, so little time.", author: "Frank Zappa", },
{ quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero", },
{ quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M.Baruch", },
{ quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", author: "William W.Purkey", },
{ quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr.Seuss", },
{ quote: "You only live once, but if you do it right, once is enough.", author: "Mae West", },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi", },]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;