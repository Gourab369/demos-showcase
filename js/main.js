async function loadGames() {
    const res = await fetch("/data/games.json");
    const games = await res.json();

    const gamesContainer = document.getElementById("games-container");
    games.forEach(game => {
        gamesContainer.innerHTML += `
            <div class="game-card">
                <img src="${game.thumbnail}">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="/pages/game-frame.html?id=${game.id}">Play</a>
            </div>
        `;
    });
}

loadGames();