function displayArtistAlbums(artistId) {
    var html = "";
    for (i = 0; i < albums.length; i++) {
        console.log(artistId, albums[i])
        if (albums[i].artistId === artistId) {
            html += albums[i].createAlbumList();

            
        }
    }

    var display = document.getElementById("showArtists")
    display.innerHTML = html;
}
