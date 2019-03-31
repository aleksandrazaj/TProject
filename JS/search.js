/*function displayElements(albums) {
    var html = "";
    for (i = 0; i < albums.length; i++)
    if () {
        html += albums[i].createHTML();
    }
    
    var display = document.getElementById("showAlbums");
    display.innerHTML = html;
    }
    
    displayElements(albums); */

    function search() {
        var input = document.getElementById("myInput");
        var filter = input.value.toLowerCase();
        var divs = document.getElementsByClassName('column');
      
        for (i = 0; i < divs.length; i++) {
          if (divs[i].innerText.toLowerCase().includes(filter)) {
            divs[i].style.display = "block";
          } else {
            divs[i].style.display = "none";
          }
        }
      }