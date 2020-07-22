//initialising variables
const startURL = "https://api.harvardartmuseums.org/object";
const apiKey = "?apikey=664fe862-4dac-4184-8c4a-3aa1620d459c";
let title = "sky";
let classification = "Paintings";
let finalURL = startURL + apiKey + "&title=" + title + "&classification=" + classification;

fetch(finalURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        };
        return response.json()
    })
    .then(json => console.log(json.records[2].primaryimageurl))
    .catch(console.error)

    //how many results: json.info.totalrecords
    //image url: json.records[0].primaryimageurl
    //title:
    //artist:
    //century:

 //list of different classifications
 //if statements to make the search broader if not specificied
 //if statements for when no result is found
 //if statement for when no image is found
//apikey=664fe862-4dac-4184-8c4a-3aa1620d459c&title=rabbit&classification=Paintings