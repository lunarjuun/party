CREATE DATABASE userdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brukernavn VARCHAR(50) NOT NULL UNIQUE,
    passord_hash VARCHAR(255) NOT NULL,
    rolle VARCHAR(10) NOT NULL DEFAULT 'bruker'
);

-- boolean = true/false while varchar is more advanced