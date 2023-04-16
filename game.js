/**Title: How to Make a Quiz App using HTML CSS Javascript- Vanilla Javascript Project for Beginners Tutorial * Author:(Brian Designs) * Date: (2020) * Code version:(v1) * Availability:https://www.youtube.com/watch?v=f4fB9Xg2JEY () */
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers= true
let score = 0
let questionCounter= 0 
let availableQuestions =[]

let questions = [
    {
        question: 'Which startup was acquired by Facebook in 2012 for $1 billion and went on to become the most downloaded app in the previous decade?',
        choice1: 'Twitter',
        choice2: 'Instagram',
        choice3: 'SnapChat',
        choice4: 'Tumblr',
        answer:2,
    },
    {
        question: 'What programming language was developed by James Gosling at Sun Microsystems and is named after a type of coffee from Indonesia? ',
        choice1: 'Java',
        choice2: 'Scala',
        choice3: 'Python',
        choice4: 'Cobol',
        answer:1,
    },
    {
        question: 'What popular operating system was launched in 1991 and has a mascot named Tux the Penguin?',
        choice1: 'Android',
        choice2: 'Macintosh',
        choice3: 'Microsoft',
        choice4: 'Linux',
        answer:4,
    },
    {
        question: '"Cars" was the final Pixar film to be released on VHS and also the first to be released on what pose-DVD high-resolution technology?',
        choice1: 'Blu Ray',
        choice2: 'Pink Ray',
        choice3: 'CDs',
        choice4: 'Red Ray',
        answer:1,
    },
    {
        question: 'What word is often abbreviated as Fn on a keyboard?',
        choice1: 'Fun',
        choice2: 'Control',
        choice3: 'Function',
        choice4: 'F9',
        answer:3,
    },
    {
        question: 'What computer and printer giant was founded in 1039 in Palo,Alto, CA?  Hint: It is sometimes better known by the two-letter acronym based on its founders names.',
        choice1: 'Canon',
        choice2: 'Epson',
        choice3: 'Hewlett-Packard',
        choice4: 'Xerox',
        answer:3,
    },
    {
        question: 'ByteDance is a Chinese internet technology company headquartered in Beijing that is most famously the owner of what mega-popular social media platform?',
        choice1: 'TikTok',
        choice2: 'Baidu Tieba',
        choice3: 'Tencent QC',
        choice4: 'Zhihu',
        answer:1,
    },
    {
        question: 'PDF is, unsurprisingly, an acronym. Name any of the three words represented by PDF.',
        choice1: 'Please Dont FailMeNow',
        choice2: 'Passable Drive File',
        choice3: 'Printable Document Folder',
        choice4: 'Portable Document Format',
        answer:4,
    },
]
const SCORE_POINTS=100
const MAX_QUESTIONS=8

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}
//creating 'new question'and score tracker
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

   
    //tracks questions in chronilogical order and give percentage till completion
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


//Question Index calculation
const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
    })


    //Splice will remove elements from an aray and if necessary inserts new elements in their place, returning the deleted elements.
    availableQuestions.splice(questionsIndex,1)
    
    acceptingAnswers=true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

