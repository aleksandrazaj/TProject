

function albumPage(selectedAlbum) {
    var html = "";
    for (i = 0; i < albums.length; i++) {
        if (albums[i].albumId === selectedAlbum) {
            html += albums[i].albumDisplayPage();
            html += albums[i].albumInfo();
    
                
        }
    }
    
        var showAlbumPage = document.getElementById("showAlbums")
        showAlbumPage.innerHTML = html;
}
