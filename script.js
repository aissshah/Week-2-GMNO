// get user input
// search through our api database 
// check if that input appears in any of the quotes
//  display only those quotes that contain the user input on our page


<<<<<<< HEAD
const searchButton = document.querySelector(".search__btn")
||||||| fca1e5e
const searchButton = document.querySelector(".searchBtn")
=======
const searchButton = document.querySelector(".searchBtn")
const input = document.getElementById('userInput')
>>>>>>> ce8f586ca555126b50f8d64bf7739ab9b345ff8a

input.addEventListener('input', evt => {
    const value = input.value;
    if (value) {
        searchButton.textContent = 'Find me inspiration'
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
        card.classList.add("card")
        const quotesContainer = document.createElement("div");
        card.appendChild(quotesContainer);
        quotesContainer.appendChild(quote, author); 

        // const listItem = document.createElement('li');
        // const listText = document.createElement('span');
        // const listButton = document.createElement('button');
  
        // listItem.appendChild(listText); 
        // listText.textContent = myThing;
        // listItem.appendChild(listButton);
        // listButton.textContent = 'delete';
        // list.appendChild(listItem);


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
    
 