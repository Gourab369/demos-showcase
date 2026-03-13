const params = new URLSearchParams(location.search);
const id = params.get("id");

fetch("/data/games.json")
    .then(res => res.json())
    .then(games => {
        const game = games.find(g => g.id === id);
        document.getElementById("frame").src = game.path;
    });