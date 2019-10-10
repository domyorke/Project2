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

-- HTML Routes are the literal navigation that occurs when a user navigates to a different route on the web page.

-- Front End


-- How do I test the API routes without frontend?

--  User Authentication

-- Front end

-- Test routes, then user authentication, (will affect html routes)



--With front end, start with javascript, then build out a basic skeleton css/html. 

-- 1. Test routes
---- User routes work (yay) 
---- Gear api routes work (yay)


-- 2. Backend user authentication
-- working

-- Do I need a front end setup in order to test this?
-- How will I have this connecting with


-- 3. Front end


-- If I'm not using handlebars, do I need separate HTML files for my home, sign in, login, and results pages?
--Yes, and routes to serve those pages

-- Is it within the scope of this project to have specific home pages that are specific to one User? 



-- Or should I try to get an MVP working that allows any one User to post on a Tumblr style page. 
-- Search bar?

---- 4. Attach username to sign in information

-- Login, store login information in front end.

--If a user wants to add gear, they'd have to log in. 
--User has ability to browse recently uploaded gear.

--Search bar would be a nice to have.



--Home page ajax request to pull gear from the gear database (script tag in html or a separate js file that is linked). Once gear is displayed on page, work on signup, signin page. Then work on a dashboard page that will be the user view when logged in. This will add the ability to upload new gear. 

--Amazon S3 for adding pictures. This allows ability to upload anything. It will provide a link (similar to imager) and it is a link to the uploaded image. You use this link in your own database. Add to gear model (photoURL). 

-- Once the user logs in, it gives them the ability to fill out a form and add new gear. That's it for MVP.