//Replaces the html content of artists.html with album page of clicked album
function albumPageArtist(selectedAlbum) {
    var html = "";
    for (i = 0; i < albums.length; i++) {
        if (albums[i].albumId === selectedAlbum) {
            html += albums[i].albumDisplayPageArtist();
    
                
        }
    }
    
        var showAlbumPage = document.getElementById("showArtists")
        showAlbumPage.innerHTML = html;
}

