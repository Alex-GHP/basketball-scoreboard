
let scoreCount = 0
let threePointCount = 0
let twoPointCount = 0
let onePointCount = 0
function incrementHome(points) {
    scoreCount += points
    if (points == 1) {
        onePointCount++;
    }
    else if (points == 2) {
        twoPointCount++;
    }
    else {
        threePointCount++;
    }
    document.getElementById("score-home").textContent = scoreCount;
    document.getElementById("home-1").textContent = onePointCount;
    document.getElementById("home-2").textContent = twoPointCount;
    document.getElementById("home-3").textContent = threePointCount;
}

let scoreCountAway = 0
let threePointCountAway = 0
let twoPointCountAway = 0
let onePointCountAway = 0
function incrementAway(points) {
    scoreCountAway += points
    if (points == 1) {
        onePointCountAway++;
    }
    else if (points == 2) {
        twoPointCountAway++;
    }
    else {
        threePointCountAway++;
    }
    document.getElementById("score-away").textContent = scoreCountAway;
    document.getElementById("away-1").textContent = onePointCountAway;
    document.getElementById("away-2").textContent = twoPointCountAway;
    document.getElementById("away-3").textContent = threePointCountAway;
    
    updateCounts()
}

function resetGame() {
    scoreCountAway = 0
    threePointCountAway = 0
    twoPointCountAway = 0
    onePointCountAway = 0
    scoreCount = 0
    threePointCount = 0
    twoPointCount = 0
    onePointCount = 0
    
    updateCounts()
}

function updateCounts() {
            document.getElementById("score-home").textContent = scoreCount;
            document.getElementById("home-1").textContent = onePointCount;
            document.getElementById("home-2").textContent = twoPointCount;
            document.getElementById("home-3").textContent = threePointCount;
            document.getElementById("score-away").textContent = scoreCountAway;
            document.getElementById("away-1").textContent = onePointCountAway;
            document.getElementById("away-2").textContent = twoPointCountAway;
            document.getElementById("away-3").textContent = threePointCountAway;
        }
