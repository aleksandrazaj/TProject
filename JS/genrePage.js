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

    const buttons = document.getElementsByClassName('add-cart-btn')
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        addToCart(event.target.dataset.id)
    })
}
}

