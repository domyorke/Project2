DROP DATABASE IF EXISTS shoegazerDB;
CREATE DATABASE shoegazerDB;

USE shoegazerDB;


-- API routes
-- API routes require the models and update the json pages that hold our data. 
-- API routes do not need a home directory
-- These are the routes that convert our backend data and make it useable for the frontend via json objects. 
-- HTML Routes are the literal navigation that occurs when a user navigates to a different route on the web page.

----Comparison to Post-Author-Joins
-- author.js = user.js
-- post.js =  gear.js

---- 4. Attach username to sign in information

--If a user wants to add gear, they'd have to log in. 
--User has ability to browse recently uploaded gear.


--Amazon S3 for adding pictures. This allows ability to upload anything. It will provide a link (similar to imager) and it is a link to the uploaded image. You use this link in your own database. Add to gear model (photoURL). 
-- Multer for photos?

--I'm thinking that when logged in, the homepage is the same, but user gains the ability to add gear. Then, you can click the author for their individual list. 
-- 

-- To do - 

--Home page ajax request (check NYTimes assignment) to pull gear from the gear database (script tag in html or a separate js file that is linked). Once gear is displayed on page, work on signup, signin page. Then work on a dashboard page that will be the user view when logged in. This will add the ability to upload new gear. 
-- Once the user logs in, it gives them the ability to fill out a form and add new gear. That's it for MVP.


-- 1. Upload to heroku. 
---- We bookmarked a step-by-step
---- Kylan slacked an article with regards to deploying with a sequelize database.

-- 2. Begin working on dynamically adding data to the javascript pages in order to allow user to add and delete their data. 
---- Set up javascript files for each HTML page. 
---- Reference the Authors assignment to get a start on this

-- 3. Work on user authentication 
---- Allow only logged in users to add and delete gear. 

-- It seems the signup and logins are working. there is no feedback from the front end however to display a logged in user. Also, I'd like to be able to add and delete gear for only logged in users. 
-- It appears I am correctly storing the signup and login info as I am able to login after creating an account. 

--Heroku deployed but link not working
-- Heroku Deployment







-- How can I ensure that the user and gear page is dynamic and showing only data from the logged in user?

-- Make sure user signup bipasses having to log in.

-- Hide elements from the HTML such as the "My Profile" button showing when the user is not yet logged in

-- Allow user to add pictures using Amazon C3 or some other technology.





--In javascript, have variable is logged in set to false. when they log in, on the callback of logged in, update varible to true, and update the DOM. Keep the elements hidded until logged in. 


--When homepage loads, ajax request to get all gear data, and append to home page. 

-- When my profile page loads, ajax to backend to retrieve that user's gear. Send this back to the json (like homepage), and once we get that in the .then on the ajax of he front end, append to profile page. 

