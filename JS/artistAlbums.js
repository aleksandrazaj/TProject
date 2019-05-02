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
    
    const buttons = document.getElementsByClassName('add-cart-btn')
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        addToCart(event.target.dataset.id)
    })
}
}
