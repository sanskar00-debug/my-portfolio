console.log("JavaScript is connected!")
console.log("Hello Sanskar!")
console.log(2 + 3)

// Personal Details
let myName = "Chikku"
let myAge = 22
let myCity = "Yavatmal"
let isStudent = true

console.log(myName)
console.log(myAge)
console.log(myCity)
console.log(isStudent)



// Text (String) - always in quotes
let name = "Sanskar"
let college = " Shri Shivaji's College of Engineering and Technology Akola"



// Number -no quotes
let age = 22
let marks = 85.5



// Boolean -only true or false
let isLearning = true
let isBored = false



// Nothing
let empty = null

// Math in JavaScript
let a = 10
let b = 3

console.log(a + b)    // 13
console.log(a - b)    // 7
console.log(a * b)    // 30
console.log(a / b)    // 1 (remainder!)



// Joining Words
let firstName = "Sanskar"
let lastName  = "Muneshwar"
 
console.log(`My name is ${firstName} ${lastName}`)
console.log(`I am ${myAge} year old from ${myCity}`)

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

// Your marks from your rael subject!
let tocMarks = 50
let ooadMarks = 52

if (tocMarks >= 50) {
    console.log(`TOC: Passed  (${tocMarks} marks)`)
} else {
    console.log(`TOC: Failed  (${tocMarks} marks)`)
}

// DEFINING the function ( teaching the trick )
function sayHello() {
    console.log("Hello! ")
    console.log("Welcome to my portfolio!")
}

// CALLING the function ( using the trick)
sayHello()   // Hello! 
sayHello()   // Hello! 

// Functions with INPUTS 
function greet(name) {
    console.log(`Hello ${name}! Welcome! `)
}
greet("Sanskar")
greet("Chikku")
greet("Sanskar Muneshwar")

// Functions that give back answers
function addNumbers(a, b) {
    return a + b
}

let result = addNumbers(10, 5)
console.log(result)   // 15

// Real example:
function calculateAge(birthYear) {
    return 2026 - birthYear
}

let MYAGE = calculateAge(2004)
console.log(`I am ${MYAGE} years old`)  // I am 22 years old
