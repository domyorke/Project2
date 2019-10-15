$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
          //.val() grabs the data from the email input. .trim() removes the white space from both sides of the email. 
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      //If there is an email or password entered, return. 
      if (!userData.email || !userData.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the users page
    // Otherwise we log any errors
    function signUpUser(email, password) {
      $.post("/api/users", {
        email: email,
        password: password
      })
        .then(function(data) {
        //   the original line ---> window.location.replace("/home");
        window.location.replace("/home")
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });