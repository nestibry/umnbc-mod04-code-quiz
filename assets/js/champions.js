var highScores = [
    {rank:0,  name:"BKN",    score:500},
    {rank:1,  name:"BryGuy", score:1500},
    {rank:2,  name:"MLH",    score:100},
    {rank:3,  name:"WHN",    score:600},
];

var ascendingHighScores = highScores.sort((a,b) => a.score - b.score );
console.log(ascendingHighScores);

// Arrow functions

var descendingHighScores = highScores.sort((a,b) => b.score - a.score );
console.log(descendingHighScores);
console.log(highScores);

// var highScores = JSON.parse(localStorage.getItem('highScores')) || [];    // Null || empty array []



