/*var src = document.getElementById("div1");
var damn = document.createElement("img");
damn.src = "covers/damn.jpg";
src.appendChild(damn); */


/*var img_damn = document.createElement("img");
img_damn.src = "covers/damn.jpg";
document.getElementById("div1").appendChild(img_damn); */


//var damn = document.createElement("img");
//damn.src = "./covers/damn.jpg";
//document.getElementById("div1").appendChild(damn);




/*var damn = document.getElementById('div1');
var image=document.appendChild('img');
imgage.src = "./covers/damn.jpg";
damn.appendChild(image);*/

class Album {
    constructor(title, artist, genre, date, cover, artistImg){
    this.title = title
    this.artist = artist
    this.genre = genre
    this.date = date
    this.cover = cover
    this.artistImg = artistImg }

    createHTML() {
        return "<div class='column'><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + " " + this.artist + "</p></div>"
    }

    createArtist() {
        return "<div class='column'><img style='width:100%' src=" + this.artistImg + "></img><p>" + this.artist + "</p></div>"
    }
}

var album1 = new Album("DAMN.","Kendrick Lamar","Hip Hop",false, "./covers/damn.png", "./artists/kendrick.jpg" )
var album2 = new Album("B4.DA.$$","Joey Bada$$","Hip Hop",false, "./covers/badass.jpg", "./artists/joey.jpg")
var album3 = new Album("Self-Titled","Kids See Ghosts","Hip Hop", true, "./covers/ksg.jpg", "./artists/kanyex2.jpg")
var album4 = new Album("Slime Season 3","Young Thug","Hip Hop",false, "./covers/slime_season_3.jpg", "./artists/young.jpg")
var album5 = new Album("Rodeo","Travis Scott","Hip Hop",false, "./covers/rodeo.jpg", "./artists/travisscott.jpg")
var album6 = new Album("Channel Orange","Frank Ocean","Neo Soul",false, "./covers/channel_orange.jpg", "./artists/frank.jpg")


var albums = [album1, album2, album3, album4, album5, album6];

//var albumText = document.createElement("p");
//var node = document.createTextNode(album1.title + " " + album1.artist);
//document.getElementById("div1").appendChild(node);



albums.push(new Album("Astroworld", "Travis Scott", "Hip Hop", true, "./covers/astroworld.jpg"))
albums.push(new Album("Lemonade", "Beyonce", "R&B", false, "./covers/lemonade.jpg", "./artists/beyonce.jpg"))

function displayAlbums() {
    for (let i = 0; i < albums.length; i++) {
        console.log(albums[i])
    }
}


function displayElements() {
var html = "";
for (i = 0; i < albums.length; i++) {
    html += albums[i].createHTML();
}

var display = document.getElementById("showAlbums");
display.innerHTML = html;
}

displayElements();


/*function printAlbums() {
    for (let i = 0; i < albums.length; i++) {
        console.log(albums[i])
    }
}

printAlbums(); */


// albums.push() - adds elements to the array

// albums.splice() - removes elements from the array

//var albums = []
//albums.push(album1)


// var albums = [album1]


// Create an array of albums
// Create a function to print all albums
// create a function only print album titles
// Create a function to add a new album
// Create a function to delete an album (by Index, by Title)