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
-- API routes require the models and update the json pages that hold our data. 
-- API routes do not need a home directory
-- These are the routes that convert our backend data and make it useable for the frontend via json objects. 

