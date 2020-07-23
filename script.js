// get user input
// search through our api database 
// check if that input appears in any of the quotes
//  display only those quotes that contain the user input on our page


const searchButton = document.querySelector(".search__btn")
const mainBody = document.querySelector("main")

const input = document.getElementById('userInput')

input.addEventListener('input', evt => {
    const value = input.value;
    if (value) {
        searchButton.textContent = 'Get inspired'
    } else {
        searchButton.textContent = 'Surprise me!'
    }
})

    

function showResults (){
    const userInput = document.querySelector("#userInput").value.trim();
    const userInputLower = userInput.toLowerCase()

    fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
    .then(response => {return response.json()})
    .then(data => {
        const quote = document.createElement("h4");
        const author = document.createElement("p");
        const card = document.createElement("section");
        const quotesContainer = document.createElement("div"); 
        const art = document.createElement("img");

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
        
        mainBody.appendChild(card);
        card.appendChild(art);
        quotesContainer.appendChild(quote); 
        quotesContainer.appendChild(author); 
        quotesContainer.classList.add("quotes__container")
        card.classList.add("card");
        card.appendChild(quotesContainer);
        
        art.src = imageSRC;
    });
}
searchButton.addEventListener("click",showResults);


//add if no quote comes up!

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
    
 