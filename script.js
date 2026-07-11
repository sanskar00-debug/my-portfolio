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
        return "F"
    }
}

console.log(`OOAD: ${getGrade(50)}`)
console.log(`TOC: ${getGrade(72)}`)
console.log(`Maths: ${getGrade(85)}`)

// Function 3 - check if passed
function isPassed(marks) {
    if (marks >= 50) {
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