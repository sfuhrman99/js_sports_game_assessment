
let shootOne = document.querySelector("#teamone-shoot-button");
let shootTwo = document.querySelector("#teamtwo-shoot-button");
let goalOne = document.querySelector("#teamone-numgoals");
let goalTwo = document.querySelector("#teamtwo-numgoals");
let shotsOne = document.querySelector("#teamone-numshots");
let shotsTwo = document.querySelector("#teamtwo-numshots");
let resetButton = document.querySelector("#reset-button");
let resetCount = document.querySelector("#num-resets");
let shootSound = document.querySelector("#shootsound");
let slamdunkbutton = document.querySelector(".slamdunkbutton");
let slamdunknoise = document.querySelector("#slamdunk");
let resetsound = document.querySelector("#resetsound");


shootOne.addEventListener("click", function() {

    let chance = (Math.round(Math.random()));
    shootSound.play();
    

    if (chance == 1) {
        let goalCount = Number(goalOne.innerHTML) + 1;
        goalOne.innerHTML = goalCount; 
        console.log("GOAL");
    }

    let shots = Number(shotsOne.innerHTML) + 1;
    shotsOne.innerHTML = shots;
    
    
    console.log("shot" + chance);
})

shootTwo.addEventListener("click", function() {

    let chance = (Math.round(Math.random()));
    shootSound.play();
    

    if (chance == 1) {
        let goalCount = Number(goalTwo.innerHTML) + 1;
        goalTwo.innerHTML = goalCount; 
        console.log("GOAL");
    }

    let shots = Number(shotsTwo.innerHTML) + 1;
    shotsTwo.innerHTML = shots;
    
    
    console.log("shot" + chance);
})

resetButton.addEventListener("click", function(){
    
    let resets = Number(resetCount.innerHTML) +1;
    resetCount.innerHTML = resets; 
    resetsound.play();
    let reset = 0;

    goalOne.innerHTML = reset; 
    shotsOne.innerHTML = reset;
    shotsTwo.innerHTML = reset;
    goalTwo.innerHTML = reset; 



})

slamdunkbutton.addEventListener("click", function(){
    slamdunknoise.play();
})