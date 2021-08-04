
$(document).ready(function() {

    $("button").on("click",function () {
        const randomCharacter = Math.ceil(Math.random() * 80)
        $.get(`https://akabab.github.io/starwars-api/api/id/${randomCharacter}.json`, function(data){
            $("div#name").text(data["name"])
            $("div#homeWorld").text(data["homeworld"])
            $("div#height").text(data["height"])
            $("div#gender").text(data["gender"])
            $("div#skinColor").text(data["skinColor"])
            $("img.characterImage").attr("src", data["image"])
        })
    })  
})
