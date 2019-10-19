$(document).ready(function () {

    //What do we want to do?

    //On the home page, let's prepend the most recent gear posts by user. 

    //WHen page loads, we want to check the local storage to see if that item exists. If it does, we'll provide css to that link. 

    var loggedIn = false;

    if (localStorage.getItem("loggedIn")) {
        //Target logged in class and display CSS to hide it. 
        $(".profileLink").css("display", "block");
        $(".logoutLink").css("display", "block");
        $(".loginLink").css("display", "none");
        $(".signUpLink").css("display", "none");
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

    $.get('/api/gear').then(function (res) {
        for (ind in res) {
            var row = res[ind];
            var email = row.User.email;
            var descCol = "<td>" + row.gear + "</td>";
            var emailCol = "<td><a href='mailto: " + email + "'>" + email + "</a></td>";
            
            $("#gearList").prepend("<tr>" + descCol + emailCol + "</tr>");
        }
    })
})
