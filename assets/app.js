// create array to pass in topics
var topics = ["Messi", "Ronaldo", "Mbappe", "Neymar"];

// send request to GIPHY API
function requestApi() {
    var soccer = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + soccer + "&limit=10&offset=0&rating=PG-13&lang=en&api_key=WzfyqAFwWwijOVAklUZAy7gJo71I6jSS";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        $("#content-view").text(JSON.stringify(response));
        
    });
    
}

// create button and disply onto html
function renderButton(){
    $("#button-view").empty();

    
    for (var i=0; i < topics.length; i++){
        var soccerButtons = $("<button>");
        soccerButtons.addClass("soccer-btn").attr("data-name", topics[i]).text(topics[i]);
        $("#button-view").append(soccerButtons);

    }
 


}
// capture user input
$("#soccer-search").on("click", function(event){
    
    event.preventDefault();

    var soccer = $("#soccer-input").val().trim();
    topics.push(soccer);

    renderButton();


});

$(document).on("click", ".soccer-btn", requestApi);
renderButton();