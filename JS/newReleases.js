function newReleases() {
    var html = "";
    for (i = 0; i < albums.length; i++) {
        if (albums[i].date == true) {
            html += albums[i].displayNewReleases();
            
    
                
        }
    }
    
        var showNewAlbumPage = document.getElementById("showNewAlbums")
        showNewAlbumPage.innerHTML = html;
}

newReleases();