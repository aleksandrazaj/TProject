//Function to replace html content of index.html with album page content (info, youtube link, add to cart button)
function albumPage(selectedAlbum) {
    //HTML input as a string
    var html = "";
    for (i = 0; i < albums.length; i++) {
        if (albums[i].albumId === selectedAlbum) {
            html += albums[i].albumDisplayPage();
            html += albums[i].albumInfo();
            html += albums[i].youtubeSample();
    
               
        }
    }
    
        var showAlbumPage = document.getElementById("showAlbums")
        showAlbumPage.innerHTML = html;

        var youtubebtn = document.getElementsByClassName("youtubebtn");
    // Event listener for youtube clicks to avoid more onclick functions
    for(i=0; i < youtubebtn.length; i++){
        youtubebtn[i].addEventListener('click', function(e){
            window.location.href = e.target.dataset.youtube;
        });
    }

    const buttons = document.getElementsByClassName('add-cart-btn')
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        addToCart(event.target.dataset.id)
    })
}
    
 }



