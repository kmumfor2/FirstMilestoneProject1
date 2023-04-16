// Title: How to Make a Quiz App using HTML CSS Javascript- Vanilla Javascript Project for Beginners Tutorial * Author:(Brian Designs) * Date: (2020) * Code version:(v1) * Availability:https://www.youtube.com/watch?v=f4fB9Xg2JEY ()//
const highScoresList = document.querySelector('#highScoresList')
// "||" is "or"
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")