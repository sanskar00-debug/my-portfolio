// ===== QUIZ DATA =====
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Method Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which CSS property makes items sit side by side in a row?",
        options: [
            "display: block",
            "display: grid",
            "display: flex",
            "display: inline"
        ],
        correct: 2
    },
    {
        question: "Which tag creates a clickable link in HTML?",
        options: [
            "<link>",
            "<a href>",
            "<url>",
            "<click>"
        ],
        correct: 1
    },
    {
        question: "What does 'let' do in JavaScript?",
        options: [
            "Creates a function",
            "Creates a loop",
            "Creates a variable",
            "Creates an array"
        ],
        correct: 2
    },
    {
        question: "Which JavaScript method adds an item to the END of an array?",
        options: [
            "array.shift()",
            "array.unshift()",
            "array.pop()",
            "array.push()"
        ],
        correct: 3
    }
]

// ===== VARIABLES =====
let currentQuestion = 0
let score = 0
let answered = false

// ===== GET ELEMENTS =====
let questionText = document.getElementById("questionText")
let optionsBox = document.getElementById("optionsBox")
let feedback = document.getElementById("feedback")
let nextBtn = document.getElementById("nextBtn")
let resultBox = document.getElementById("resultBox")
let questionBox = document.getElementById("questionBox")
let progressFill = document.getElementById("progressFill")
let progressText = document.getElementById("progressText")
let scoreText = document.getElementById("scoreText")
let resultMessage = document.getElementById("resultMessage")
let restartBtn = document.getElementById("restartBtn")

// ===== LOAD QUESTION =====
function loadQuestion() {
    answered = false
    feedback.innerText = ""
    nextBtn.style.display = "none"

    let q = questions[currentQuestion]
    questionText.innerText = q.question

    // Update progress
    let progress = ((currentQuestion + 1) / questions.length) * 100
    progressFill.style.width = progress + "%"
    progressText.innerText = `Question ${currentQuestion + 1} of ${questions.length}`

    // Clear old options
    optionsBox.innerHTML = ""

    // Create new option buttons
    q.options.forEach(function(option, index) {
        let btn = document.createElement("button")
        btn.className = "option-btn"
        btn.innerText = option
        btn.addEventListener("click", function() {
            checkAnswer(index, btn)
        })
        optionsBox.appendChild(btn)
    })
}

// ===== CHECK ANSWER =====
function checkAnswer(selectedIndex, selectedBtn) {
    if (answered) return
    answered = true

    let correct = questions[currentQuestion].correct
    let allButtons = optionsBox.querySelectorAll(".option-btn")

    // Disable all buttons
    allButtons.forEach(btn => btn.disabled = true)

    if (selectedIndex === correct) {
        selectedBtn.classList.add("correct")
        feedback.innerText = "✅ Correct! Well done!"
        feedback.style.color = "#3fb950"
        score++
    } else {
        selectedBtn.classList.add("wrong")
        allButtons[correct].classList.add("correct")
        feedback.innerText = "❌ Wrong! The correct answer is highlighted!"
        feedback.style.color = "#f85149"
    }

    nextBtn.style.display = "block"
}

// ===== NEXT QUESTION =====
nextBtn.addEventListener("click", function() {
    currentQuestion++

    if (currentQuestion < questions.length) {
        loadQuestion()
    } else {
        showResult()
    }
})

// ===== SHOW RESULT =====
function showResult() {
    questionBox.style.display = "none"
    optionsBox.style.display = "none"
    feedback.style.display = "none"
    nextBtn.style.display = "none"

    resultBox.style.display = "block"
    scoreText.innerText = `${score} / ${questions.length}`

    if (score === 5) {
        resultMessage.innerText = "🌟 PERFECT SCORE! You're a web dev genius!"
    } else if (score >= 4) {
        resultMessage.innerText = "🔥 Excellent! Almost perfect!"
    } else if (score >= 3) {
        resultMessage.innerText = "👍 Good job! Keep practicing!"
    } else if (score >= 2) {
        resultMessage.innerText = "😊 Not bad! Review the material!"
    } else {
        resultMessage.innerText = "📚 Keep studying! You'll get it!"
    }
}

// ===== RESTART =====
restartBtn.addEventListener("click", function() {
    currentQuestion = 0
    score = 0
    answered = false

    questionBox.style.display = "block"
    optionsBox.style.display = "flex"
    feedback.style.display = "block"
    resultBox.style.display = "none"

    loadQuestion()
})

// ===== START QUIZ =====
loadQuestion()