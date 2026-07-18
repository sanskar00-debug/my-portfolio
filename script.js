// My details
let name = "Chikku"
let age = 22
let city = "Yavatmal"
let dream = "Data Scientist"

// Print them nicely
console.log(`Hi! My name is ${name}`)
console.log(`I am ${age} years old`)
console.log(`I am from ${city}, India`)
console.log(`My dream is to become a ${dream}!`)

// Math
let currentYear = 2026
let birthYear = currentYear - age
console.log(`I was born in ${birthYear}`)

// IF/ELSE - making decisions !
let MyAge = 22

if (MyAge >= 18) {
    console.log("You are an adult! ")
} else {
    console.log("You are a minor ")
}

// Another example
let Marks = 85

if (Marks >= 90) {
    console.log("Grade: A+  ")
} else if (Marks >= 80) {
    console.log("Grade: A  ")
} else if (Marks >= 70) {
    console.log("Grade: B  ")
} else if (Marks >= 60) {
    console.log("Grade: C  ")
} else {
    console.log("Grade: F  ")
}

// Your marks from your real subject!
let tocMarks = 50
let ooadMarks = 52

if (tocMarks >= 50) {
    console.log(`TOC: Passed  (${tocMarks} marks)`)
} else {
    console.log(`TOC: Failed  (${tocMarks} marks)`)
}

// Function 1 - introduce yourself
function introduce() {
    let name = "Sanskar"
    let city = "Yavatmal"
    let dream = "Data Scientist"
    console.log(`Hi! I'm ${name} from ${city}`)
    console.log(`I want to become a ${dream}!`)
}

introduce()

// Function 2 - grade calculator
function getGrade(marks) {
    if (marks >= 90) {
        return "A+"
    } else if (marks >= 80) {
        return "A"
    } else if (marks >= 70) {
        return "B"
    } else if (marks >= 60) {
        return "C"
    } else {
        return "D"
    }
}

console.log(`OOAD: ${getGrade(50)}`)
console.log(`TOC: ${getGrade(72)}`)
console.log(`Maths: ${getGrade(85)}`)

// Function 3 - check if passed
function isPassed(marks) {
    if (marks >= 40) {
        return "Passed  "
    } else {
        return "Failed  "
    }
}
console.log(isPassed(45))
console.log(isPassed(72))

// ARRAYS - My Actual Skills!
let mySkills = ["HTML", "CSS", "JavaScript", "Python", "Flutter", "SQL", "Excel", "PowerBI", "Git"]

console.log("My skills:")
console.log(mySkills)
console.log(`I have ${mySkills.length} skills!`)
console.log(`First skill: ${mySkills[0]}`)
console.log(`Last skill: ${mySkills[mySkills.length - 1]}`)

// Add a new skill
mySkills.push("Tableau")
console.log(`Added Tableau! Now I have ${mySkills.length} skills!`)

// Check if Python exists
console.log(`Do I know Python? ${mySkills.includes("Python")}`)

// LOOPS - Doing Things Repeatedly!
for (let i=0; i < 5; i++) {
    console.log(`Count: ${1}`)
}

// Loop Through an ARRAY:
let hobbies = ["Cricket", "Football", "Movies", "Coding"]

for (let i = 0; i < hobbies.length; i++) {
    console.log(`Hobby ${i + 1}: ${hobbies[i]}`)
}

// For each
let skills = ["HTML", "CSS", "JavaScript"]

skills.forEach(function(skill) {
    console.log(`I know ${skill}!`)
})

// WHILE Loop 
let hungry = true
let cookiesEaten = 0

while (hungry) {
    cookiesEaten++
    console.log(`Eating cookie #${cookiesEaten} `)
    if (cookiesEaten === 3) {
        hungry = false
    }
}
console.log("Full now! ")

// Your real subjects and marks!
let subjects = ["OOAD", "TOC", "Distributed Ledger", "Professional Ethics", "Wireless Sensor Network"]
let marks = [50,52,45,42,47]

// Loop through and show results
for (let i = 0; i< subjects.length; i++) {
    let grade = getGrade(marks[i])
    let status = isPassed(marks[i])
    console.log(`${subjects[i]}: ${marks[i]} marks Grade ${grade}  ${status}`)
}

// ===== DOM MANIPULATION =====

// 1. Find elements
let title = document.getElementById("mainTitle")
let tagline = document.getElementById("tagline")
let btn = document.getElementById("contactBtn")

// 2. Read what's there
console.log(title.innerText)
console.log(tagline.innerText)

// 3. CHANGE the text
title.innerText = " Hi, I'm Sanskar!"

// 4. CHANGE the style
title.style.color = "yellow"
title.style.fontSize = "48px"

// 5. CHANGE background color
document.body.style.backgroundColor = "#1a1a2e"

// Make button react to clicks!
btn.addEventListener("click", function() {
    alert("Thanks for clicking!  I'll contact you soon! 🙂 ")
})

let darkModeBtn = document.getElementById("darkModeBtn")
let isDark = false

darkModeBtn.addEventListener("click", function() {
    if (isDark === false) {
        // Turn ON dark mode
        document.body.style.backgroundColor = "#1a1a2e"
        document.body.style.color = "white"
        darkModeBtn.innerText = "🌞 Light Mode"
        isDark = true
    } else {
        // Turn OFF dark mode 
        document.body.style.backgroundColor = "#f0f4f8"
        document.body.style.color = "#333"
        darkModeBtn.innerText = "🌙 Dark Mode"
        isDark = false
    }
})

// Click to reveal a fun fact about yourself!
let aboutTitle = document.getElementById("mainTitle")

aboutTitle.addEventListener("click", function(){
    aboutTitle.innerText = " I Love Football! ⚽"
    aboutTitle.style.color = "#fff"
})

// ===== FORM HANDLING =====

let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let messageInput = document.getElementById("messageInput")
let formMessage = document.getElementById("formMessage")
let contactBtn = document.getElementById("contactBtn")

// Real-time Validation as user types
nameInput.addEventListener("input", function() {
    if (nameInput.value.length > 0) {
        nameInput.style.borderColor = "#58a6ff"
    } else {
        nameInput.style.borderColor = "#30363d"
    }
})

emailInput.addEventListener("input", function() {
    if (emailInput.value.includes("@")) {
        emailInput.style.borderColor = "#3fb950"
    } else {
        emailInput.style.borderColor = "#f85149"
    }
})

// Form Submission
contactBtn.addEventListener("click", function() {
    let name = nameInput.value.trim()
    let email = emailInput.value.trim()
    let message = messageInput.value.trim()

    // Check if fields are empty
    if (name === "") {
        formMessage.innerText = "❌ Please enter your name!"
        formMessage.style.color = "#f85149"
        nameInput.focus()
        return
    } 
     if (email === "" || !email.includes("@")) {
        formMessage.innerText = "❌ Please enter a valid email"
        formMessage.style.color = "#f85149"
        emailInput.focus()
        return
     }
     if (message === "") {
        formMessage.innerText = "❌ Please write a message!"
        formMessage.style.color = "f85149"
        messageInput.focus()
        return
     }

     // All fields Valid!
     formMessage.innerText = `✅ Thanks ${name}! Message sent Successfully!`
     formMessage.style.color = "#3fb950"

     // Clear the form
     nameInput.value = ""
     emailInput.value = ""
     messageInput.value = ""

     // Reset border colors
     nameInput.style.borderColor = "#30363d"
     emailInput.style.borderColor = "#30363d"
})


