// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(document).ready(function () {

    //ADD NEW PASTRY---------------------------------------------------
    $(".pastryNew").on("submit", function (event) {
        event.preventDefault();
        //Creating var to get input value and set devoured to NO
        var newPastry = {
            pastry_name: $("#pastryInputId").val().trim(),
            devoured: 0
        };

        // Send the POST request
        $.ajax("/api/pastry", {
            type: "POST", //ADD
            data: newPastry,
        }).then(
            function () {
                console.log(" pastry$.js , created new pastry!!!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    //DEVOUR pastry ---------------------------------------------------------
    $("#buttonUpdate").on("click", function (event) {
        event.preventDefault();

        console.log("CLICK to devour"); //working

        var id = $(this).data("id");

        console.log(this);

        var devourState = { devoured: 1 }; //working

        // Send the PUT request. UPDATE
        $.ajax("/api/pastry/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                console.log("changed devour to", devourState);

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#buttonDelete").on("click", function(event) {
        event.preventDefault();

      var id = $(this).data("id");
      
      $.ajax("/api/pastry/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted pastry", id);
          location.reload();
        }
      );
    });
});
