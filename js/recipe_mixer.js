$(document).ready(function () {
var vegan = "";
var vegetarian = "";
var lowCalorie = "";
var ingredientsArray = [];
var finalIngredientsArray = [];

    $("#submit").on( "click", function(){
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
        for (var i = 0; i<ingredientsArray.length; i++){
            if (!ingredientsArray[i]==""){
                finalIngredientsArray.push(ingredientsArray[i])
                console.log(finalIngredientsArray);
            }
        }

        if  ($("#vegan").prop("checked") == true){
            vegan = "vegan"
            console.log(vegan);
        }
        
        if  ($("#vegetarian").prop("checked") == true){
            vegetarian = "vegetarian"
            console.log(vegetarian);
        }

        if  ($("#lowCalorie").prop("checked") == true){
            lowCalorie = "lowCalorie"
            console.log(lowCalorie);
        }
        })
})