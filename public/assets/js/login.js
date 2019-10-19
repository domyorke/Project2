$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });

    var user_email;
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the home page
    function loginUser(email, password) {
      user_email = email;
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function(data) {
          console.log(data);
          console.log("LOGGING IN SUCCESS")
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("user_email", user_email);
          window.location.replace("/");
          //Doing a post request, but we are not sending any information to the api/login route. 


          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });  