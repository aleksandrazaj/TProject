//Searches through the column div to find matching query
    function search() {
      //grabs the search bar
        var input = document.getElementById("myInput");
        //converts user input to lower case
        var filter = input.value.toLowerCase();
        //searches through the divs 
        var divs = document.getElementsByClassName('column');
        //for each div looks for matches with the 'includes' method
        for (i = 0; i < divs.length; i++) {
          if (divs[i].innerText.toLowerCase().includes(filter)) {
            divs[i].style.display = "block";
          } else {
            divs[i].style.display = "none";
          }
        }
      }
