//  $(document).ready(function(){

    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=chicken&ignorePantry=true", {
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
      $(".title1").text(data[0].title);
      $(".title2").text(data[1].title);
      $(".title3").text(data[2].title);
      $(".title4").text(data[3].title);
    //  $(".resultTwoHeader").text(data.array[1].title);
    //  $(".resultThreeHeader").text(data.array[2].title);
    //  $(".resultFourHeader").text(data.array[3].title);
     
    //  $(".weatherIconCurrent").text(data.weather.icon); 
    //  $(".temperatureCurrent").text("Temperature: " +data.main.temp +"");
    //  $(".humidityCurrent").text("Humidity: "+data.main.humidity+"%");
    //  $(".uvIndexCurrent").text(data.name);
    //  $(".windSpeedCurrent").text("Wind Speed: "+data.wind.speed+" MPH");
     })
    .catch(err => {
        console.error(err);
    });

 





    $( function() {
        $( "#accordion" ).accordion({
          collapsible: true
        });
      } );

      $( "#accordion" ).accordion({
        heightStyle: "fill"
      });

// });
  
//     var apiKey = "92082348e1fdf20edfb9752ebc60f8bc"
//     var lat = 0
//     var long = 0 
//     var city = "boston"
  
//     function getCurrentWeather(){
     
//     var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+ apiKey;
      
//       fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//        $(".state-results").text(data.name);
//        $(".weatherIconCurrent").text(data.weather.icon); 
//        $(".temperatureCurrent").text("Temperature: " +data.main.temp +"");
//        $(".humidityCurrent").text("Humidity: "+data.main.humidity+"%");
//        $(".uvIndexCurrent").text(data.name);
//        $(".windSpeedCurrent").text("Wind Speed: "+data.wind.speed+" MPH");
//        lat = data.coord.lat
//        long = data.coord.lon
       
//     });
      
//   }
  
// }
  

//Carl Results section add code








//Sean's Details section