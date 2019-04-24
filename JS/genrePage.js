//Replaces HTML content at genres.html on click
function genrePage(selectedGenre) {
    var html = "";
    for (i = 0; i < albums.length; i++) {
        if (albums[i].genreId === selectedGenre) {
            html += albums[i].genreDisplayPage();

            
        }
    }

    var display = document.getElementById("showGenres")
    display.innerHTML = html;
}

