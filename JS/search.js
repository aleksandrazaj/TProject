//Searches through the column div to find matching query
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
