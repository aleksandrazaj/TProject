class Genre { 
    constructor (genre, index, cover) { 
    this.genre = genre 
    this.index = index 
    this.cover = cover }

    createGenre() { 
        return "<div  class='column' onclick='genrePage(\"" + this.index +"\")'><img style ='width:100%' src=" + this.cover + "></img><p>" + this.genre +"</p></div>"

    }
    }


var genre1 = new Genre ("Hip Hop", "01", "./covers/hiphop.jpg" )
var genre2 = new Genre ("Neo Soul", "02", "./covers/NeoSoul.jpg")
var genre3 = new Genre ("RnB", "03", "./covers/RnB.jpg")
var genre4 = new Genre ("Grime", "04", "./covers/Grime.jpeg")

var genres = [genre1, genre2, genre3, genre4]
//function to display all genres 

function displayGenres() {
    var html = ""
    for (i = 0; i< genres.length; i++) {
        html += genres[i].createGenre()
    }
   
    var display = document.getElementById("showGenres")
    display.innerHTML = html; 
}

displayGenres()
