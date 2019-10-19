$(document).ready(function () {

  //What do we want to do?

  //On the home page, let's prepend the most recent gear posts by user. 

  //WHen page loads, we want to check the local storage to see if that item exists. If it does, we'll provide css to that link. 


  var loggedIn = false;

  if (localStorage.getItem("loggedIn")) {
    //Target logged in class and display CSS to hide it. 
    $(".loginLink").css("display", "none");
  }

  $(".logoutLink").click(function () {
    $.get("/logout").then(function (res) {
      if (res) {
        //local storage remove item
        localStorage.removeItem("loggedIn");
        window.location.reload();
      }
    })
  })



  //Below is code for user adding gear to the database and to the page.
  //app.post("/api/createGear" - route for creating new piece of gear

  var gearForm = $("#gearForm");
  var gearInput = $("#title");

  // Adding an event listener for when the form is submitted
  gearForm.on("submit", handleFormSubmit);

  var url = window.location.search;
  var postId;
  var authorId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;


  function handleFormSubmit(event) {
    event.preventDefault();

    //Won't submit the gear if we are missing an input. enterGearField is the form input class in userandgear.html
    if (!gearInput.val().trim()) {
      return ("Please enter text before clicking submit");
    }

    //Take data from form and send to addGear API in a post request
    var gearData = {
      gear: document.getElementById("title").value,
      email: localStorage.getItem("user_email")
    };

    submitGear(gearData).then(function () {location.reload()});
  }

  function submitGear(gear) {
    return $.post("/api/createGear", gear, function () {
      //Here, we would like to append to user's gear and prepend to the homepage
      //When we prepend to user homepage, include the user's email address as a point of contact
      console.log("Did we get this far?")
    });

    // function updateGear(gear) {
    //   $.ajax({
    //     method: "PUT",
    //     url: "/api/posts",
    //     data: gear
    //   })
    //     .then(function () {
    //       //
    //     });
    // }

  }


  $.get('/api/gear', { email: localStorage.getItem('user_email') }).then(function (res) {
    function getDeleter(i) {
      var target_url = "/api/gear/" + String(i);
      function deleter() {
        $.ajax({
          type: "DELETE",
          url: target_url,
          success: function (msg) {
            console.log("delete successful?", msg);
          }
        }).then(function () {location.reload()})
      }
      return deleter;
    };

    for (ind in res) {
      var row = res[ind];
      console.log(row);

      var delId = 'del' + String(row.id);
      var descCol = "<td>" + row.gear + "</td>";
      var delCol = "<td><a href='#' id='" + delId + "'>Remove</a></td>";

      $("#gearList").append("<tr>" + descCol + delCol + "</tr>");
      $("#" + delId).click(getDeleter(row.id));
    }
  })
});
