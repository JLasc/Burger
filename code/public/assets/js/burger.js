$(function () {
    $('.change-devoured').on('click', event => {

        var id = $(this).data("id");
        console.log(id)


        var eatburger = true;

        console.log(eatburger)
        var isEaten = {
            eat: eatburger
        }

        /* $.ajax({
            url: "/api/burger/" + id,
            type: "PUT",
            data: isEaten
        }).then(function () {
            console.log('changed burger', isEaten);
            location.reload()
        }) */
    })

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