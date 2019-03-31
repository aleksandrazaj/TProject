//slectedArtistId refers to this.id, the function compares its value to artistId property in albums class
function displayArtistAlbums(selectedArtistId) {
    var html = "";
    for (i = 0; i < albums.length; i++) {
        if (albums[i].artistId === selectedArtistId) {
            html += albums[i].createAlbumList();

            
        }
    }

    var display = document.getElementById("showArtists")
    display.innerHTML = html;
}
