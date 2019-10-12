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

