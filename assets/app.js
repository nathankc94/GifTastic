// create array to pass in topics
var topics = ["Messi", "Ronaldo", "Mbappe", "Neymar"];

// create button and disply all the topics in the array onto html
function createButtons() {
    $("#button-view").empty();
    
    
    for (var i = 0; i < topics.length; i++) {
        var soccerButtons = $("<button>");
        soccerButtons.addClass("soccer-btn").attr("data-name", topics[i]).text(topics[i]);
        $("#button-view").append(soccerButtons);
        
        
    }
}
createButtons();

$(document).on("click", ".soccer-btn", function () {


    // send request to GIPHY API and grab data-name property value from button

    var soccer = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soccer + "&limit=10&offset=0&rating=PG-13&lang=en&api_key=WzfyqAFwWwijOVAklUZAy7gJo71I6jSS";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // create img div, grab rating, still gif, and animated gif  
        var result = response.data;
        for (var j = 0; j < result.length; j++) {
            var still = result[j].images.fixed_height_still.url;
            var animatedGif = result[j].images.fixed_height.url;
            // disply the initial gif once clicked on button (still gif)
            // add data status and set it to still
            var gifImage = $('<img>').attr("src", still).attr('data-animate', animatedGif).attr('data-still', still).attr('data-state', 'still');
            $('#content-view').prepend(gifImage);
            // once click on a gif make it so it changes from still to animated
            gifImage.on('click', activateGif);
            // add rating
            var rating = $("<p>").text(result[j].rating);
            $('#content-view').prepend(rating);
        }
    });

    //  method to change data state
    function activateGif() {
        var state = $(this).attr('data-state');
        
        if (state === 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    }

});


// capture text from user input and push into topics array
$("#soccer-search").on("click", function (event) {

    event.preventDefault();

    var soccer = $("#soccer-input").val().trim();
    topics.push(soccer);

    createButtons();
});
