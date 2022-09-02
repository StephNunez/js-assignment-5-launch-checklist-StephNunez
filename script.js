// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function() {

    //myFetch(); 
    let form = document.querySelector("form"); 
    form.addEventListener("submit", function(event){
       
    // let pilot = document.querySelector("input[id=pilotName]").value;  
    // let copilot = document.querySelector("input[id=copilotName]");
    // let fuelLevel = document.querySelector("input[id=fuelLevel]");
    // let cargoLevel = document.querySelector("input[id=cargoMass]");  
    let list = document.getElementById("faultyItems");   


    let pilot = document.forms[0].elements[0].value;
    let copilot = document.forms[0].elements[1].value;
    let fuelLevel = document.forms[0].elements[2].value;
    let cargoLevel = document.forms[0].elements[3].value;
    // let pilotStatus = document.getElementById("pilotStatus");

    event.preventDefault(); 
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);   
    

}); 

   let listedPlanets; 
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();  
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

       
       let planet = pickPlanet(listedPlanets); 
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);  

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

   
});