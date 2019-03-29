var topics = ["Messi", "Ronaldo", "Mbappe", "Neymar"];

function renderButton(){
    $("#button-view").empty();

// create button and disply on to html
    
    for (var i=0; i < topics.length; i++){
        var soccerButtons = $("<button>");
        soccerButtons.addClass("soccer-btn");
        soccerButtons.attr("data-name", topics[i]);
        soccerButtons.text(topics[i]);
        $("#button-view").append(soccerButtons);

    }



}

$("#soccer-search").on("click", function(event){
    
    event.preventDefault();
    var soccer = $("#soccer-input").val().trim();
    topics.push(soccer);
    renderButton();


});
renderButton();