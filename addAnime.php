<?php
// Koneksi ke database
$host = 'localhost';
$dbname = 'anime_db';
$username = 'root';
$password = '';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Ambil data dari form (JSON format)
    $data = json_decode(file_get_contents("php://input"));

    $sql = "INSERT INTO anime (title, cover, story_rating, graphic_rating, character_rating, ost_rating, studio, source, genre)
            VALUES (:title, :cover, :story_rating, :graphic_rating, :character_rating, :ost_rating, :studio, :source, :genre)";

    $stmt = $conn->prepare($sql);

    $stmt->execute([
        ':title' => $data->title,
        ':cover' => $data->cover,
        ':story_rating' => $data->story_rating,
        ':graphic_rating' => $data->graphic_rating,
        ':character_rating' => $data->character_rating,
        ':ost_rating' => $data->ost_rating,
        ':studio' => $data->studio,
        ':source' => $data->source,
        ':genre' => $data->genre
    ]);

    echo json_encode(['message' => 'Anime added successfully!']);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
