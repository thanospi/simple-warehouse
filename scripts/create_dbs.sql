CREATE DATABASE skroutz;

-- \c skroutz;

-- CREATE TABLE Clusters (
-- name VARCHAR(255) PRIMARY KEY,
-- postcode VARCHAR(255) NOT NULL UNIQUE
-- );

-- -- INSERT INTO Clusters VALUES
-- -- ('A', '10'),
-- -- ('B', '11'),
-- -- ('C', '16');

-- CREATE TABLE Drivers (
-- name VARCHAR(255) PRIMARY KEY,
-- cluster VARCHAR(255) NOT NULL UNIQUE
-- );

-- -- INSERT INTO Drivers VALUES
-- -- ('Moe', 'A'),
-- -- ('Larry', 'B'),
-- -- ('Curly', 'C');

-- CREATE TABLE Orders (
-- voucher VARCHAR(255) PRIMARY KEY,
-- postcode_area VARCHAR(255),
-- postcode VARCHAR(255) NOT NULL,
-- scanned BOOLEAN DEFAULT FALSE
-- );

-- -- INSERT INTO Orders VALUES
-- -- ('A1A', '10', '10041'),
-- -- ('B2B', '11', '11332'),
-- -- ('C3C', '10', '10042'),
-- -- ('D4D', '11', '11342'),
-- -- ('E5E', '11', '11444'),
-- -- ('F6F', '16', '16788'),
-- -- ('G7G', '16', '16788'),
-- -- ('H8H', '10', '10043'),
-- -- ('I9I', '16', '16800'),
-- -- ('J0J', '16', '16801');

-- CREATE TABLE Users (
-- _id VARCHAR(255) PRIMARY KEY,
-- name VARCHAR(255) NOT NULL UNIQUE,
-- password VARCHAR(255) NOT NULL
-- );


-- CREATE DATABASE skroutz_test;
-- \c skroutz_test;

-- CREATE TABLE Clusters (
-- name VARCHAR(255) PRIMARY KEY,
-- postcode VARCHAR(255) NOT NULL UNIQUE
-- );

-- INSERT INTO Clusters VALUES
-- ('A', '10'),
-- ('B', '11'),
-- ('C', '16');

-- CREATE TABLE Drivers (
-- name VARCHAR(255) PRIMARY KEY,
-- cluster VARCHAR(255) NOT NULL UNIQUE
-- );

-- INSERT INTO Drivers VALUES
-- ('Moe', 'A'),
-- ('Larry', 'B'),
-- ('Curly', 'C');

-- CREATE TABLE Orders (
-- voucher VARCHAR(255) PRIMARY KEY,
-- postcode_area VARCHAR(255),
-- postcode VARCHAR(255) NOT NULL,
-- scanned BOOLEAN DEFAULT FALSE
-- );

-- INSERT INTO Orders VALUES
-- ('A1A', '10', '10041'),
-- ('B2B', '11', '11332'),
-- ('C3C', '10', '10042'),
-- ('D4D', '11', '11342'),
-- ('E5E', '11', '11444'),
-- ('F6F', '16', '16788'),
-- ('G7G', '16', '16788'),
-- ('H8H', '10', '10043'),
-- ('I9I', '16', '16800'),
-- ('J0J', '16', '16801');

-- CREATE TABLE Users (
-- _id VARCHAR(255) PRIMARY KEY,
-- name VARCHAR(255) NOT NULL UNIQUE,
-- password VARCHAR(255) NOT NULL
-- );