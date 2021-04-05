$(document).ready(function () {

    if (location.search.includes("ingredients")) {
        recipeCall();
    }
    function recipeCall() {
        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?includeIngredients=" + location.search.substr(1).split("=")[1], {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f86279dabamshfff699b5628a387p1294c5jsn02d42833bd7d",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);
                $(".title1").text(data.results[0].title);
                $(".img1").attr("src", (data.results[0].image));
                $(".one").attr("id", (data.results[0].id));
                $(".title2").text(data.results[1].title);
                $(".img2").attr("src", (data.results[1].image));
                $(".two").attr("id", (data.results[1].id));
                $(".title3").text(data.results[2].title);
                $(".img3").attr("src", (data.results[2].image))
                $(".three").attr("id", (data.results[2].id));
                $(".title4").text(data.results[3].title);
                $(".img4").attr("src", (data.results[3].image));
                $(".four").attr("id", (data.results[3].id));
            })
            .catch(err => {
                console.error(err);
            });
    }
    $(".modal-trigger").click(function getDetails(event) {
        event.preventDefault();
        var getRecipeID = $(this).attr("id");
        console.log(getRecipeID)

        ingredientsListEl = "";
        instructionsListEl = "";

        // var recipeID = "630151"
        var ingredientsListEl = $("#ingredients-list");
        var instructionsListEl = $("#instructions-list")


        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + getRecipeID + "/analyzedInstructions?stepBreakdown=true", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f53fdaf23emshfbfb270f4f90a02p153c67jsn0b0831eac8cd",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })

            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                console.log(data);

                for (var i = 0; i < data[0].steps[i].ingredients.length; i++) {
                    var ingredientsEL = document.createElement('ul');

                    ingredientsEL.innerHTML = data[0].steps[i].ingredients[i].name;

                    ingredientsListEl.append(ingredientsEL);

                }

                for (var i = 0; i < data[0].steps.length; i++) {

                    var stepsEl = document.createElement('li');

                    stepsEl.innerHTML = data[0].steps[i].step;

                    instructionsListEl.append(stepsEl);
 
                }

            })
            .catch(err => {
                console.error(err);
            });

    });

    $(function () {
        $("#accordion").accordion({
            collapsible: true
        });
    });

    $("#accordion").accordion({
        heightStyle: "content"
    });

})
