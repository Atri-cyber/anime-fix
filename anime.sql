CREATE TABLE anime (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    cover TEXT NOT NULL,
    story_rating INT NOT NULL,
    graphic_rating INT NOT NULL,
    character_rating INT NOT NULL,
    ost_rating INT NOT NULL,
    studio VARCHAR(255) NOT NULL,
    source VARCHAR(50) NOT NULL,
    genre TEXT NOT NULL
);
