// Write your helper functions here!
require('isomorphic-fetch');

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty"; 
    }
    else if (isNaN(testInput)){
        return "Not a Number"; 
    }
    else {
        return "Is a Number"; 
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //pilot and co-pilot are strings
    //fuel level and cargo mass are numbers  
   
       if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
           window.alert("Error: All Fields Required"); 
       }
       
       if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
           window.alert("Error: incorrect input"); 
       }
   
       list.style.visibility = "visible";  //changes visibility in styles.css #faultyItems 
   
       document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} ready.`; 
       document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} ready.`; 
       
       if (fuelLevel <= 10000){
           document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey."; 
           document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
           document.getElementById("launchStatus").style.color = "red";
   
       }
   
       if (cargoLevel >= 10000){
           document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off"; 
           document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
           document.getElementById("launchStatus").style.color = "red";
       }
   
       if (fuelLevel > 10000 && cargoLevel < 10000){
           document.getElementById("launchStatus").style.color = "green";
           document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
   
       }
   
       return document; 
       
   }; 



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   document.getElementById("missionTarget").innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name} </li>
       <li>Diameter: ${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}"/> `
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json(); 
        
    });

    return planetsReturned;

    //some code necessary for fetching planetary JSON
    //add the URL and return json 
}

function pickPlanet(planets) {

    //planets = myFetch();   //array with planet info

    let randomPlanet = Math.floor(Math.random() * planets.length);   //one random object from fetched planet info

    planetInfo = planets[randomPlanet]; 

    return planetInfo; 

    //use Math.random() and return one planet from the listh 
    //with a randomly-selected index
}




module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;


