DROP DATABASE IF EXISTS shoegazerDB;
CREATE DATABASE shoegazerDB;

USE shoegazerDB;

-- DATABASE
-- Create Database (done)
--Create tables for user authentication and user info (done)

-- Sequelize models
-- I have created two models, one for gear and one for user.

---- gear.js
--Has the parameter "gear"
---- user.js
-- Has the parameters: email, password, and username


----Comparison to Post-Author-Joins
-- author.js = user.js
-- post.js =  gear.js

--To do next, look for a require example somewhere in my notes where this is done in order to join tables (I belive I have done this via the User.associate within the user.js model)


-- API routes

-- What is the difference between my API routes and my HTML routes?
-- Why do I need to reak my api routes up?