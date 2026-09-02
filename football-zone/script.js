// =========================================================================
// 1. MOCK PLAYER DATABASE
// =========================================================================
const playerDatabase = {
    "cristiano ronaldo": {
        name: "Cristiano Ronaldo",
        team: "Al-Nassr / Portugal",
        stats: { goals: 900, assists: 250, speed: 85 }
    },
    "ronaldo": {
        name: "Cristiano Ronaldo",
        team: "Al-Nassr / Portugal",
        stats: { goals: 900, assists: 250, speed: 85 }
    },
    "neymar": {
        name: "Neymar Jr",
        team: "Al-Hilal / Brazil",
        stats: { goals: 436, assists: 244, speed: 89 }
    },
    "kylian mbappé": {
        name: "Kylian Mbappé",
        team: "Real Madrid / France",
        stats: { goals: 330, assists: 125, speed: 97 }
    },
    "mbappe": {
        name: "Kylian Mbappé",
        team: "Real Madrid / France",
        stats: { goals: 330, assists: 125, speed: 97 }
    },
    "erling haaland": {
        name: "Erling Haaland",
        team: "Manchester City / Norway",
        stats: { goals: 260, assists: 48, speed: 94 }
    },
    "haaland": {
        name: "Erling Haaland",
        team: "Manchester City / Norway",
        stats: { goals: 260, assists: 48, speed: 94 }
    }
};

// Global reference variable to store the actively searched player profile
let activePlayer = null;

// =========================================================================
// 2. SEARCH ENGINE FUNCTIONALITY
// =========================================================================
const playerSearchInput = document.getElementById('playerSearch');
const searchBtn = document.getElementById('searchBtn');
const statsDisplay = document.getElementById('statsDisplay');

searchBtn.addEventListener('click', () => {
    const query = playerSearchInput.value.trim().toLowerCase();
    
    if (!query) {
        statsDisplay.innerHTML = `<p class="placeholder-text" style="color: #ff6b6b;">Please enter a name to search.</p>`;
        return;
    }

    if (playerDatabase[query]) {
        activePlayer = playerDatabase[query];
        
        // Render detailed player stats UI into the DOM
        statsDisplay.innerHTML = `
            <div class="player-profile-view animate-fadein">
                <h4 style="color: #58a6ff; font-size: 1.4rem; margin: 0 0 5px 0;">${activePlayer.name}</h4>
                <p style="color: #8b949e; margin: 0 0 15px 0;">🛡️ Current Club: <strong>${activePlayer.team}</strong></p>
                
                <div class="stat-row" style="margin-bottom: 8px;">⚽ Total Goals: <strong style="color: #fff;">${activePlayer.stats.goals}</strong></div>
                <div class="stat-row" style="margin-bottom: 8px;">👟 Total Assists: <strong style="color: #fff;">${activePlayer.stats.assists}</strong></div>
                <div class="stat-row" style="margin-bottom: 8px;">⚡ Pace Rating: <strong style="color: #fff;">${activePlayer.stats.speed}</strong></div>
            </div>
        `;
    } else {
        activePlayer = null;
        statsDisplay.innerHTML = `
            <p class="placeholder-text" style="color: #ff8c00;">
                ❌ Player not found in system database. Try "Ronaldo", "Neymar", "Mbappe", or "Haaland".
            </p>
        `;
    }
});

// =========================================================================
// 3. PERFORMANCE RATING CALCULATOR MATH LOGIC
// =========================================================================
const calculateBtn = document.getElementById('calculateBtn');
const resultsDisplay = document.getElementById('resultsDisplay');

calculateBtn.addEventListener('click', () => {
    if (!activePlayer) {
        resultsDisplay.innerHTML = `<p class="placeholder-text" style="color: #ff8c00;">⚠️ Please search and find a player profile first before calculating a rating.</p>`;
        return;
    }

    // Retrieve custom user-configured values from the DOM input elements
    const wGoals = parseFloat(document.getElementById('weightGoals').value) || 0;
    const wAssists = parseFloat(document.getElementById('weightAssists').value) || 0;
    const wSpeed = parseFloat(document.getElementById('weightSpeed').value) || 0;

    const totalWeight = wGoals + wAssists + wSpeed;

    if (totalWeight === 0) {
        resultsDisplay.innerHTML = `<p class="placeholder-text" style="color: #ff6b6b;">⚠️ Total weight combination cannot equal 0. Please assign analytical values.</p>`;
        return;
    }

    // Normalize stats to an analytical index baseline to execute weighting equation
    const calculatedScore = (
        (activePlayer.stats.goals * (wGoals / totalWeight)) +
        (activePlayer.stats.assists * (wAssists / totalWeight)) +
        (activePlayer.stats.speed * (wSpeed / totalWeight))
    );

    // Render calculated analytics output metrics cleanly to dashboard view node
    resultsDisplay.innerHTML = `
        <div class="calculation-output animate-fadein" style="text-align: left;">
            <h4 style="margin: 0 0 10px 0; color: #bc85ff;">Dynamic Formula Output</h4>
            <p style="margin: 0 0 5px 0;">Player Asset analyzed: <strong style="color: #fff;">${activePlayer.name}</strong></p>
            <p style="margin: 0 0 15px 0;">Weight configuration applied: <span style="color: #8b949e;">${wGoals}% G / ${wAssists}% A / ${wSpeed}% S</span></p>
            <div style="font-size: 1.5rem; font-weight: bold; color: #58a6ff;">
                Overall Custom Metric: ${calculatedScore.toFixed(1)}
            </div>
        </div>
    `;
});

// =========================================================================
// 4. LIVE INTERACTIVE FAN ZONE CHEER BOARD
// =========================================================================
const postCheerBtn = document.getElementById('postCheerBtn');
const fanNameInput = document.getElementById('fanName');
const cheerPlayerSelect = document.getElementById('cheerPlayer');
const fanMessageInput = document.getElementById('fanMessage');
const liveCheerFeed = document.getElementById('liveCheerFeed');

postCheerBtn.addEventListener('click', () => {
    const nickname = fanNameInput.value.trim();
    const targetedStar = cheerPlayerSelect.value;
    const messageText = fanMessageInput.value.trim();

    if (!nickname || !messageText) {
        alert("Please complete both your nickname and cheer message fields before submitting output!");
        return;
    }

    // Assign appropriate layout theme design color hooks based on active selections
    let stylingThemeClass = "other-theme";
    if (targetedStar === "Cristiano Ronaldo") stylingThemeClass = "ronaldo-theme";
    if (targetedStar === "Neymar") stylingThemeClass = "neymar-theme";

    // Build the dynamic DOM element template node dynamically 
    const newCheerCard = document.createElement('div');
    newCheerCard.className = `cheer-card ${stylingThemeClass} animate-fadein`;
    newCheerCard.style.marginTop = "15px";
    
    newCheerCard.innerHTML = `
        <h4>${escapeHTML(nickname)} <span>⚽ Shoutout to ${targetedStar}</span></h4>
        <p>"${escapeHTML(messageText)}"</p>
    `;

    // Inject the new posting element directly onto the top of the feed stream
    liveCheerFeed.insertBefore(newCheerCard, liveCheerFeed.firstChild);

    // Clear user input form fields for continuous feedback loops
    fanNameInput.value = '';
    fanMessageInput.value = '';
});

// Clean utility function to sanitize text input strings against injection vulnerabilities
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}