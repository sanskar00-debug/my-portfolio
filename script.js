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

// Arrow way 
const multiply = (a, b) => a * b

console.log(multiply(5, 3))   