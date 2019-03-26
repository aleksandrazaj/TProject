
function displayArtists() {
    var html = "";
    for (i = 0; i < albums.length; i++) {
        html += albums[i].createArtist();
    }
    
    var display = document.getElementById("showArtists");
    display.innerHTML = html;
}

displayArtists();

/* var artists = albums.map(function (item) {
    return item.artist })
    
    var artistsUnique = artists.filter(function (item, index) {
        return artists.indexOf(item) >= index;
    })
    */