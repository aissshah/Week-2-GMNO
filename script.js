//initialising global variables
const startURL = "https://api.harvardartmuseums.org/object";
const apiKey = "?apikey=664fe862-4dac-4184-8c4a-3aa1620d459c";
let title = "flowers";
let classification = "Paintings";
let finalURL = startURL + apiKey + "&title=" + title + "&classification=" + classification + "&size=100";
let imageSRC, century, artistName, artworkName;
let randomNumber;
let checkLoop = false;
const searchButton = document.querySelector(".search__btn")
const mainBody = document.querySelector("main")
const input = document.getElementById('userInput')

//Harvard API functions
function showImage() {
    fetch(finalURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        };
        return response.json()
    })
    .then(json => {
        // console.log(json);
        randomNumber = Math.floor(Math.random() * json.records.length);
        checkIfRecordsAvailable(json);
        checkImageAvailable(json);
        
        console.log(imageSRC)

        showResults();

    })
    .catch(console.error)
}

//to see if no records
const checkIfRecordsAvailable = data => {
    if (data.records.length === 0) {
        noImageAvailable();
    }
}

//another option is to start the loop from 0 but then loop might run forever
const checkImageAvailable = data => {
    while(!data.records[randomNumber].primaryimageurl){
        randomNumber++;
        if (randomNumber >= data.records.length) {
            if (checkLoop) {
                noImageAvailable();
                break;
            } else {
                randomNumber = 0;
                checkLoop = true;
            }
        }
    }
    imageSRC = data.records[randomNumber].primaryimageurl;
    artworkName = data.records[randomNumber].title;
    century = data.records[randomNumber].century;

    if (data.records[randomNumber].peoplecount !== 0) {
        artistName = data.records[randomNumber].people[0].name;
    } else {
        artistName = "Unknown";
    }
}

//this function will return when no image is there and manipulate dom saying that. also stop other functions from running?
const noImageAvailable = () => {
    imageSRC = "resources/option1.png";
}

//Quotes API

// function fetchProgrammingQuotes(){
//     return fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
//     .then(response => {
//         if (!response.ok) throw new Error(response.status);
//         return response.json();
//     })
//     .then(data => {return data;})
// }
      

function showResults (){
    const userInput = document.querySelector("#userInput").value.trim();
    const userInputLower = userInput.toLowerCase()
    // const nodes = document.querySelectorAll(".card");
    // const last = nodes[nodes.length - 1];

    // console.log(nodes)
    // console.log(last)

    const quote = document.createElement("h4");
    const author = document.createElement("p");
    const quotesContainer = document.createElement("div");
    const art = document.createElement("img");
    const card = document.createElement("section");
    art.src = imageSRC;
        

    fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
    .then(response => {return response.json()})
    .then(data => {
        const quotesWithKeyword = [];
        const authorOfQuoteWithKeyword = []; 
        for (var i = 0; i < data.length; i++){
            if (data[i].en.includes(" " + userInputLower)){
                quotesWithKeyword.push(data[i].en);
                authorOfQuoteWithKeyword.push(data[i].author)
            }
        } 
        const randomQuoteNumber = Math.floor(Math.random() * quotesWithKeyword.length);
        // console.log(quotesWithKeyword[randomQuoteNumber])

        quote.textContent = quotesWithKeyword[randomQuoteNumber];
        author.textContent = authorOfQuoteWithKeyword[randomQuoteNumber];
        
        mainBody.appendChild(card);
        card.appendChild(art);
        card.classList.add("card")
        card.appendChild(quotesContainer);
        quotesContainer.appendChild(quote); 
        quotesContainer.appendChild(author); 
        quotesContainer.classList.add("quotes__container");
        
        

     
        
    })
    .catch(console.error)
}

//Event Listeners
searchButton.addEventListener("click",showImage); //for Harvard Museum API
// searchButton.addEventListener("click",showResults); //for Quotes API

input.addEventListener('input', evt => {
    const value = input.value;
    if (value) {
        searchButton.textContent = 'Find me inspiration'
    } else {
        searchButton.textContent = 'Surprise me!'
    }
}); 