// ===================================
// 1. LIVE CLOCK & DATE
// ===================================

function updateClock() {
    let now = new Date()

    // Clock
    let hours = String(now.getHours()).padStart(2, "0")
    let minutes = String(now.getMinutes()).padStart(2, "0")
    let seconds = String(now.getSeconds()).padStart(2, "0")
    document.getElementById("clockDisplay").innerText =
        `${hours}:${minutes}:${seconds}`

    // Date
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let dayName = days[now.getDay()]
    let date = now.getDate()
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    document.getElementById("dateDisplay").innerText =
        `${dayName}, ${date} ${month} ${year}`
}

// Update clock every second
updateClock()
setInterval(updateClock, 1000)


// ===================================
// 2. WEATHER API
// ===================================

async function getWeather() {
    try {
        let city = "Yavatmal"
        let apiKey = CONFIG.WEATHER_API_KEY;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        let response = await fetch(url)
        let data = await response.json()

        let temp = Math.round(data.main.temp)
        let feelsLike = Math.round(data.main.feels_like)
        let humidity = data.main.humidity
        let windSpeed = data.wind.speed
        let description = data.weather[0].description
        let icon = data.weather[0].icon

        document.getElementById("weatherContent").innerHTML = `
            <div class="weather-main">
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" />
                <div class="weather-temp">${temp}°C</div>
                <div class="weather-desc">${description}</div>
            </div>
            <div class="weather-details">
                <div class="weather-detail-item">
                    Feels Like
                    <span>${feelsLike}°C</span>
                </div>
                <div class="weather-detail-item">
                    Humidity
                    <span>${humidity}%</span>
                </div>
                <div class="weather-detail-item">
                    Wind
                    <span>${windSpeed} m/s</span>
                </div>
                <div class="weather-detail-item">
                    City
                    <span>Yavatmal</span>
                </div>
            </div>
        `
    } catch (error) {
        document.getElementById("weatherContent").innerHTML =
            `<div class="loading">❌ Weather unavailable</div>`
    }
}

getWeather()


// ===================================
// 3. MOTIVATIONAL QUOTES
// ===================================

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "Data is the new oil.", author: "Clive Humby" }
]

function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    let quote = quotes[randomIndex]
    document.getElementById("quoteContent").innerHTML = `
        <p class="quote-text">"${quote.text}"</p>
        <p class="quote-author">— ${quote.author}</p>
    `
}

showRandomQuote()
document.getElementById("newQuoteBtn").addEventListener("click", showRandomQuote)


// ===================================
// 4. TODO LIST
// ===================================

let todos = []

function renderTodos() {
    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""

    if (todos.length === 0) {
        todoList.innerHTML = `<p style="color:#484f58; text-align:center; padding:20px">No tasks yet! Add one above 😊</p>`
        return
    }

    todos.forEach(function(todo, index) {
        let li = document.createElement("li")
        li.className = `todo-item ${todo.completed ? "completed" : ""}`

        li.innerHTML = `
            <input type="checkbox" class="todo-check"
                ${todo.completed ? "checked" : ""}
                onchange="toggleTodo(${index})" />
            <span>${todo.text}</span>
            <button class="todo-delete" onclick="deleteTodo(${index})">🗑️</button>
        `
        todoList.appendChild(li)
    })
}

function addTodo() {
    let input = document.getElementById("todoInput")
    let text = input.value.trim()

    if (text === "") return

    todos.push({ text: text, completed: false })
    input.value = ""
    renderTodos()
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed
    renderTodos()
}

function deleteTodo(index) {
    todos.splice(index, 1)
    renderTodos()
}

document.getElementById("addTodoBtn").addEventListener("click", addTodo)

document.getElementById("todoInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTodo()
})

renderTodos()


// ===================================
// 5. QUICK NOTES (Auto-save!)
// ===================================

let notesArea = document.getElementById("notesArea")
let notesSaved = document.getElementById("notesSaved")
let saveTimeout

// Load saved notes
notesArea.value = localStorage.getItem("dashboardNotes") || ""

notesArea.addEventListener("input", function() {
    clearTimeout(saveTimeout)
    notesSaved.innerText = "Saving..."

    saveTimeout = setTimeout(function() {
        localStorage.setItem("dashboardNotes", notesArea.value)
        notesSaved.innerText = "✅ Saved!"

        setTimeout(function() {
            notesSaved.innerText = ""
        }, 2000)
    }, 1000)
})