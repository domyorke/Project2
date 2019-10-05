DROP DATABASE IF EXISTS shoegazerDB;
CREATE DATABASE shoegazerDB;

USE shoegazerDB;

CREATE TABLE userRig (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
username VARCHAR(15),
forDemo VARCHAR(1000),
forRent VARCHAR (1000),
forSale VARCHAR (1000)
);

-- DATABASE
-- Create Database (done)
--Create tables for user authentication and user info (done)

-- Sequelize models
---- Can I have a table within a table?




-- API routes

-- 