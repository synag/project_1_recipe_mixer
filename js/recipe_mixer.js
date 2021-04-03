$(document).ready(function(){

  var diet =""; //vegan, paleo etc
  var incredients =""; //incredients (comma seperate)
  

  fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?includeIngredients=chicken,tomatoes", {
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
  .then(data=> {
       console.log(data);
      $(".title1").text(data.results[0].title);
      $(".img1").attr("src",(data.results[0].image));
      // $(".title2").text(data[0].
      $(".title2").text(data.results[1].title);
      $(".img2").attr("src",(data.results[1].image));
      $(".title3").text(data.results[2].title);
      $(".img3").attr("src",(data.results[2].image))
      $(".title4").text(data.results[2].title);
      $(".img4").attr("src",(data.results[2].image));


     })
    .catch(err => {
        console.error(err);
    });






    // fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=fish&ignorePantry=true", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "f86279dabamshfff699b5628a387p1294c5jsn02d42833bd7d",
    //         "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    //     }
    // })
    // .then(response => {
    //     console.log(response);
    //     return response.json();
    // })
    //  .then(data=> {
    //    console.log(data);
    //   $(".title1").text(data[0].title);
    //   $(".img1").attr("src",(data[0].image));
    //   // $(".title2").text(data[0].
    //   $(".title2").text(data[1].title);
    //   $(".img2").attr("src",(data[1].image));
    //   $(".title3").text(data[2].title);
    //   $(".img3").attr("src",(data[2].image));
    //   $(".title4").text(data[3].title);
    //   $(".img4").attr("src",(data[3].image));


    //  })
    // .catch(err => {
    //     console.error(err);
    // });

 
// $(".btn").eventListener("click",function(event)){
//   event.target
// }
$(".btn").click(function(){
   var  getRecipe = $(this).parent().parent().prev().text()
   console.log(getRecipe)
});




    $( function() {
        $( "#accordion" ).accordion({
          collapsible: true
        });
      } );

      $( "#accordion" ).accordion({
        heightStyle: "content"
      });
      

});
  

  

//Carl Results section add code








//Sean's Details section