document.addEventListener("DOMContentLoaded", () => {
    const animeListContainer = document.getElementById("animeList");

    const animeList = JSON.parse(localStorage.getItem("animeList")) || [];
    animeList.forEach(anime => {
        const animeCard = document.createElement("div");
        animeCard.className = "anime-card";

        animeCard.innerHTML = `
            <img src="${anime.cover}" alt="${anime.title} Cover" class="anime-cover">
            <h3>${anime.title}</h3>
            <p>Story: ${anime.rating.story}</p>
            <p>Graphic: ${anime.rating.graphic}</p>
            <p>Character: ${anime.rating.character}</p>
            <p>OST: ${anime.rating.ost}</p>
            <p>Studio: ${anime.studio}</p>
            <p>Source: ${anime.source}</p>
            <p>Genre: ${anime.genre.join(", ")}</p>
        `;

        animeListContainer.appendChild(animeCard);
    });
});
