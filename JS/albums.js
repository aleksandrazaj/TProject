class Album {
    constructor(title, artist, genre, date, cover, artistId){
    this.title = title
    this.artist = artist
    this.genre = genre
    this.date = date
    this.cover = cover
    this.artistId = artistId }
    
    // Creates a new html file for each album
    createHTML() {
        return "<div class='column'><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + " " + this.artist + "</p></div>"
    }
    createAlbumList() {
        return "<div class='column'><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + "</p></div>"
    }
    
}
//Elements of the class

var album1 = new Album("DAMN.","Kendrick Lamar","Hip Hop",false, "./covers/damn.png", "01" )
var album2 = new Album("B4.DA.$$","Joey Bada$$","Hip Hop",false, "./covers/badass.jpg", "02")
var album3 = new Album("Self-Titled","Kids See Ghosts","Hip Hop", true, "./covers/ksg.jpg", "03")
var album4 = new Album("Slime Season 3","Young Thug","Hip Hop",false, "./covers/slime_season_3.jpg", "04")
var album5 = new Album("Rodeo","Travis Scott","Hip Hop",false, "./covers/rodeo.jpg", "05")
var album6 = new Album("Channel Orange","Frank Ocean","Neo Soul",false, "./covers/channel_orange.jpg", "06")

//Array that stores Album class elements

var albums = [album1, album2, album3, album4, album5, album6];

//Adds new albums

albums.push(new Album("Astroworld", "Travis Scott", "Hip Hop", true, "./covers/astroworld.jpg", "05"))
albums.push(new Album("Lemonade", "Beyonce", "R&B", false, "./covers/lemonade.jpg", "07"))
albums.push(new Album("1999", "Joey Bada$$", "Hip Hop", false, "./covers/1999.jpg", "02"))

// Function that creates albums as columns in HTML row "showAlbums"
function displayElements() {
var html = "";
for (i = 0; i < albums.length; i++) {
    html += albums[i].createHTML();
}
//Tells the function where to create the columns
var display = document.getElementById("showAlbums");
display.innerHTML = html;
}

displayElements();
