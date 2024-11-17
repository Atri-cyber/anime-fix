<?php
// Koneksi ke database
$host = 'localhost';
$dbname = 'anime_db';
$username = 'root';
$password = '';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Ambil data dari tabel anime
    $sql = "SELECT * FROM anime";
    $stmt = $conn->query($sql);

    $animes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($animes);
} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
