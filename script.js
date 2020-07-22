fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
    .then(response => {return response.json() })
    .then(data => {
        const randomQuote = Math.floor(Math.random() * data.length)
        console.log(data[randomQuote].en);
        // const firstQuote = data[1].en;
        // console.log(firstQuote)
        const quote = document.createElement("p");
        const author = document.createElement("p");
        
        quote.textContent = data[randomQuote].en;
        author.textContent = data[randomQuote].author;
        
        document.body.appendChild(quote);
        document.body.appendChild(author);
        
    });



//     _id: "5a6ce86f2af929789500e828",
// sr: "Još nisam video problem, ma kako zamršen, koji kad se osmotri na pravi način, ne postoje još zamršeniji.",
// en: "I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated.",
// author: "Poul Anderson",
// source: null,
// numberOfVotes: 2,
// rating: 3.2,
// addedBy: "5ab04d928c8b4e3cbf733557",
// id: "5a6ce86f2af929789500e828"


    // randomQuote() {
    //     const randomNumber = Math.floor(Math.random() * quotes.length);
    //     return quotes[randomNumber];
        
    //   }