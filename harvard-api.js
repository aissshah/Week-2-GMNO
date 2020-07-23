//initialising variables
const startURL = "https://api.harvardartmuseums.org/object";
const apiKey = "?apikey=664fe862-4dac-4184-8c4a-3aa1620d459c";
let title = "fire";
let classification = "Paintings";
let finalURL = startURL + apiKey + "&title=" + title + "&classification=" + classification;

fetch(finalURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        };
        return response.json()
    })
    .then(json => {
        console.log(json);
        console.log(json.records[2].century);
        console.log(json.records[2].title);
        console.log(json.records[2].primaryimageurl);
        console.log(json.records[2].people[0].name);
        
    })
    .catch(console.error)



    // n = Math.floor(Math.random * json.records.length)

    //how many results: json.info.totalrecords or json.records.length
    //image url: json.records[0].primaryimageurl
    //title: json.records[0].title
    //artist: if json.records[0].peoplecount === 0; else, json.records[0].people[0].name
    //century: json.records[0].century
    
//how to hide API key
 //list of different classifications
 //if statements to make the search broader if not specificied
 //if statements for when no result is found
 //if statement for when no image is found if imagecount = 0
//apikey=664fe862-4dac-4184-8c4a-3aa1620d459c&title=rabbit&classification=Paintings