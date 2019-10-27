# Shoegazer


### About

The term "shoegaze" is a subgenre of indie rock originating in the 1980s/90s, and is used to define a musician who is primarily looking at their effects pedalboard and not the audience during performances. Shoegazer, as is currently developed, is a web application designed for musicians to post and share gear they have. Any user can create an account, sign in, and add gear to their profile page. The gear will then display on the homepage of the site, with any user (logged in or out) being able to view added content from all users. Users can then click on the gear and email them with any questions they have about the gear. Users that posted gear to their profile are also able to delete gear from their profile page as well. 

### Technology

Shoegazer runs on a Node.js server, using Express to handle http requests. This application was created using the MVC structure (Model, View, Controller), with content stored in a mySQL database that is dynamically updated using the Sequelize ORM npm. GET, POST, and DELETE routes are used to display, post, and remove gear from the database. The front end is styled with Bootstrap, and Passport.js is used to handle user authentication. 

### Current and Future Developement

Shoegazer is currently in early development. The current gear display functionality is a small part of the application, as there are many features to be added.  

The impetus behind Shoegazer is to have a social media for people within the music community who do not like or are not getting enough out of their current social media options. It is a site for musicians, singers, rappers, bookers, promotors, stage techs, roadies, artists, and music lovers to connect, collaborate, book shows, talk nerdy about their gear, and come together to support eachother.

Some additional features to be added include:
* Capability to add pictures for user profiles and posted gear
* Messaging for private communication between users
* Calandar for creating, planning, displaying and viewing upcoming events/shows/meetups for any given user or venue
* Direct communication with venues for an easier showbooking process

This application was fully developed by myself, Dominic Jenkins. Please feel free to reach out to me via email (dominicjenkins@hotmail.com), check out my [portfolio](https://domyorke.github.io/Bootstrap-Template/), or connect with me on [LinkedIn](https://www.linkedin.com/in/dominic-jenkins-555b30ba/)!
