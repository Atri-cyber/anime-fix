document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelector(".navbar-links");
    const isAtri = localStorage.getItem("isAtri");

    console.log("Status isAtri di localStorage:", isAtri);  // Debugging output

    // Pastikan link "Add Anime" hanya ada satu kali
    const existingAddAnimeLink = navbarLinks.querySelector("a[href='#add-anime']");

    // Jika tidak ada link "Add Anime" dan user adalah Atri
    if (isAtri === "true" && !existingAddAnimeLink) {
        console.log("User adalah Atri, menambahkan link 'Add Anime' ke navbar");

        // Menambahkan link "Add Anime" jika belum ada
        const addAnimeLink = document.createElement("li");
        addAnimeLink.innerHTML = '<a href="add-anime.html" id="add-anime">Add Anime</a>';
        navbarLinks.appendChild(addAnimeLink);
    }

    // Jika bukan Atri, pastikan link "Add Anime" dihapus
    if (isAtri !== "true" && existingAddAnimeLink) {
        console.log("User bukan Atri, menghapus link 'Add Anime' dari navbar");

        existingAddAnimeLink.parentElement.remove();
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah submit form default

    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("error-message");

    // Periksa apakah username adalah Atri
    if (username === "Atri") {
        console.log("Atri login, menambahkan isAtri ke localStorage");
        localStorage.setItem("isAtri", "true"); // Tandai Atri sebagai true
    } else {
        console.log("Username bukan Atri, menghapus isAtri dari localStorage");
        localStorage.removeItem("isAtri"); // Hapus status isAtri jika bukan Atri
    }

    // Alihkan ke halaman utama setelah login (tanpa reload halaman)
    window.location.href = "pembuka.html"; 
});
