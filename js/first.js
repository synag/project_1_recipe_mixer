$(document).ready(function() {
    var finalIngredientsArray=[];    

    $("#submit").on("click", function () {
        var ingredientsArray = [];
        var ingredient1Val = $('#ingredient1').val();
        var ingredient2Val = $('#ingredient2').val();
        var ingredient3Val = $('#ingredient3').val();
        var ingredient4Val = $('#ingredient4').val();
        var ingredient5Val = $('#ingredient5').val();
        ingredientsArray.push(ingredient1Val);
        ingredientsArray.push(ingredient2Val);
        ingredientsArray.push(ingredient3Val);
        ingredientsArray.push(ingredient4Val);
        ingredientsArray.push(ingredient5Val);
        for (var i = 0; i < ingredientsArray.length; i++) {
            if (!ingredientsArray[i] == "") {
                finalIngredientsArray.push(ingredientsArray[i]);
                window.location.href = "./second.html?ingredients=" + finalIngredientsArray.join(",");
            }
            // else {
            //     alert ("please enter at least one applicable ingredient")
            //     break;
            // }      
        }
      
        // if ($("#vegan").prop("checked") == true) {                               //potential future applications
        //     vegan = "vegan"
        //     console.log(vegan);
        // }

        // if ($("#vegetarian").prop("checked") == true) {                          //potential future applications
        //     vegetarian = "vegetarian"
        //     console.log(vegetarian);
        // }

        // if ($("#lowCalorie").prop("checked") == true) {                          //potential future applications
        //     lowCalorie = "lowCalorie"
        //     console.log(lowCalorie);
        // }

    })
})