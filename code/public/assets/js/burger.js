$(function () {


    //Add a burger\\
    $('.create-form').on('submit', event => {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim().toString()
        };

        console.log(newBurger)
        $.ajax({
            type: "POST",
            url: '/api/burger',
            data: newBurger
        }).then(function () {
            console.log("created new burger")
            location.reload();
        })

    })



});