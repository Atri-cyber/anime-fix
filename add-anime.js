document.getElementById('add-anime-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    const data = {
        title: document.getElementById('anime-title').value,
        cover: document.getElementById('anime-cover').value,
        story_rating: document.getElementById('rating-story').value,
        graphic_rating: document.getElementById('rating-graphic').value,
        character_rating: document.getElementById('rating-character').value,
        ost_rating: document.getElementById('rating-ost').value,
        studio: document.getElementById('anime-studio').value,
        source: document.getElementById('anime-source').value,
        genre: document.getElementById('anime-genre').value
    };

    // Kirim data ke API
    fetch('addAnime.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || 'Failed to add anime');
        document.getElementById('add-anime-form').reset(); // Reset form
    })
    .catch(error => console.error('Error:', error));
});
