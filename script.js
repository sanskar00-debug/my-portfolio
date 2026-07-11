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

// Creating an array
let fruits = ["Apple",  "Banana",  "Mango",  "Orange"]
//              [0]        [1]       [2]        [3]
// Counting STARTS at 0! (not 1!)

// Reading items
console.log(fruits[0])
console.log(fruits[2])
console.log(fruits.length)

// ARRAY METHOD (DOING THINGS WITH LIST) :
let skills = ["HTML",  "CSS",  "JavaScript"]

// ADD to end
skills.push("Python")
console.log(skills)   // ["HTML",  "CSS",  "JavaScript",  "Python"]

// REMOVE from end
skills.pop()
console.log(skills)  // ["HTML",  "CSS",  "JavaScript"]

// ADD to beginning
skills.unshift("Git")
console.log(skills)  //  ["Git",   "HTML",  "CSS",  "JavaScript"]

// REMOVE from beginning
skills.shift()
console.log(skills)  //  ["HTML",  "CSS",  "JavaScript"]

// Check if item EXISTS
console.log(skills.includes("CSS"))   // True
console.log(skills.includes("Flutter"))  // False

