// Ambil data anime dari backend
fetch('getAnime.php')
    .then(response => response.json())
    .then(data => {
        const animeListContainer = document.getElementById('anime-list');

        if (data.length === 0) {
              animeListContainer.innerHTML = '<p>No anime added yet.</p>';
        } else {
            data.forEach(anime => {
                const animeCard = document.createElement('div');
                animeCard.classList.add('anime-card');

                animeCard.innerHTML = `
                    <img src="${anime.cover}" alt="${anime.title}" class="anime-cover">
                    <h2 class="anime-title">${anime.title}</h2>
                    <p class="anime-details">Story: ${anime.story_rating}/10</p>
                    <p class="anime-details">Graphic: ${anime.graphic_rating}/10</p>
                    <p class="anime-details">Character: ${anime.character_rating}/10</p>
                    <p class="anime-details">OST/OP/ED: ${anime.ost_rating}/10</p>
                    <p class="anime-details">Studio: ${anime.studio}</p>
                    <p class="anime-details">Source: ${anime.source}</p>
                    <p class="anime-details">Genre: ${anime.genre}</p>
                `;

                animeListContainer.appendChild(animeCard);
            });
        }
    })
    .catch(error => console.error('Error:', error));
