const startURL = "https://api.harvardartmuseums.org/object";
let 


fetch("https://api.harvardartmuseums.org/classification/26?apikey=664fe862-4dac-4184-8c4a-3aa1620d459c")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(console.error)

var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
        apikey: "664fe862-4dac-4184-8c4a-3aa1620d459c",
        title: "rabbit",
        classification: "Paintings"
    });
    
    $.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
       console.log(data); 
    });

console.log(queryString);

//apikey=664fe862-4dac-4184-8c4a-3aa1620d459c&title=rabbit&classification=Paintings