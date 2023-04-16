/** Title: How to Make a Quiz App using HTML CSS Javascript- Vanilla Javascript Project for Beginners Tutorial * Author:(Brian Designs) * Date: (2020) * Code version:(v1) * Availability:https://www.youtube.com/watch?v=f4fB9Xg2JEY ()*/
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
//JSON.parse (local storage) will allow to save scores.
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore
//'keyup' will refresh save function
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')

    
}