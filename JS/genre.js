//New class to use for elements in genres.html
class Genre { 
    constructor (genre, index, cover) { 
    this.genre = genre 
    this.index = index 
    this.cover = cover }

    createGenre() { 
        return "<div  class='column' onclick='genrePage(\"" + this.index +"\")'><img style ='width:100%' src=" + this.cover + "></img><p>" + this.genre +"</p></div>"

    }
    }

//Elements of the class are stored in genres array
var genres = []
genres.push(new Genre ("Hip Hop", "01", "./covers/hiphop.jpg" ))
genres.push(new Genre ("Neo Soul", "02", "./covers/NeoSoul.jpg"))
genres.push(new Genre ("RnB", "03", "./covers/RnB.jpg"))
genres.push(new Genre ("Grime", "04", "./covers/Grime.jpeg"))

//function to display all genre html column divs at genres.html
function displayGenres() {
    var html = ""
    for (i = 0; i< genres.length; i++) {
        html += genres[i].createGenre()
    }
   
    var display = document.getElementById("showGenres")
    display.innerHTML = html; 
}

displayGenres()
