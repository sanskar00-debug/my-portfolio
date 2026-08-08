// Search Function Hint:
function searchPlayer(name) {
    let found = players.find(player => 
        player.name.toLowerCase().includes(name.toLowerCase())
    )
    // then show found player details on page!
}

// Rating function hint:
function getPerformanceRating(rating) {
    if (rating >= 9.5) return "World Class 🌟"
    else if (rating >= 9.0) return "Elite 🔥"
    else if (rating >= 8.5) return "Excellent 💪"
    else return "Good 👍"
}

// Player Statistics
const players = [
    { 
        name: "Cristiano Ronaldo",
        goals: 900,
        

    }
]