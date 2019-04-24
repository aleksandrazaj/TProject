//Replaces HTML content of newReleases.html with clicked on album page
function albumPageNew(selectedAlbum) {
    var html = "";
    for (i = 0; i < albums.length; i++) {
        if (albums[i].albumId === selectedAlbum) {
            html += albums[i].albumDisplayPage();
            html += albums[i].albumInfo();
    
                
        }
    }
    
        var showAlbumPage = document.getElementById("showNewAlbums")
        showAlbumPage.innerHTML = html;
}

