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
    
    //Event listener for add to cart buttons
    //Grabbing all of the buttons
    const buttons = document.getElementsByClassName('add-cart-btn')
    console.log(buttons);
    //iterates through the buttons
    for (let i = 0; i < buttons.length; i++) {
        //event listener for each one
    buttons[i].addEventListener('click', (event) => {
        //trigges addToCart() onclick
        addToCart(event.target.dataset.id)
    })
}
}
