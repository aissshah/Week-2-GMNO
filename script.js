// get user input
// search through our api database 
// check if that input appears in any of the quotes
//  display only those quotes that contain the user input on our page


const searchButton = document.querySelector(".searchBtn")

    

function showResults (){
    const userInput = document.querySelector("#userInput").value;
    const userInputLower = userInput.toLowerCase()

    fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
    .then(response => {return response.json()})
    .then(data => {
        const quote = document.createElement("p");
        const author = document.createElement("p");
        const quotesWithKeyword = [];
        const authorOfQuoteWithKeyword = []; 
        for (var i = 0; i < data.length; i++){
            if (data[i].en.includes(" " + userInputLower)){
                quotesWithKeyword.push(data[i].en);
                authorOfQuoteWithKeyword.push(data[i].author)
            }
        } 
        const randomQuoteNumber = Math.floor(Math.random() * quotesWithKeyword.length);
        console.log(quotesWithKeyword[randomQuoteNumber])

        quote.textContent = quotesWithKeyword[randomQuoteNumber];
        author.textContent = authorOfQuoteWithKeyword[randomQuoteNumber];
           document.body.appendChild(quote);
           document.body.appendChild(author);
            

    });
}
searchButton.addEventListener("click",showResults);




    // randomQuote() {
    //     const randomNumber = Math.floor(Math.random() * quotes.length);
    //     return quotes[randomNumber];
        
    //   }


// Function1!!!
    // const randomQuote = Math.floor(Math.random() * data.length)
    // console.log(data[randomQuote].en);
    // // const firstQuote = data[1].en;
    // // console.log(firstQuote)
    // const quote = document.createElement("p");
    // const author = document.createElement("p");
    
    // quote.textContent = data[randomQuote].en;
    // author.textContent = data[randomQuote].author;
    
 