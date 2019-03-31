class Artist {
    constructor(name, pic, id, artistGenre) {
    this.name = name
    this.pic = pic
    this.id = id
    this.artistGenre = artistGenre }

    createArtist() {
        return "<div class='column' onclick='displayArtistAlbums(\"" + this.id +"\")'><img style='width:100%' src=" + this.pic + "></img><p>" + this.name + "</p></div>"
    }
}

var artist1 = new Artist("Kendrick Lamar", "./artists/kendrick.png", "01", "hiphop")
var artist2 = new Artist("Joey Bada$$", "./artists/joey.jpg", "02", "hiphop")
var artist3 = new Artist("Kids See Ghosts", "./artists/ksg.jpg", "03", "hiphop")
var artist4 = new Artist("Young Thug", "./artists/young.jpg", "04", "hiphop")
var artist5 = new Artist("Travis Scott", "./artists/travisscott.jpg", "05", "hiphop")
var artist6 = new Artist("Frank Ocean", "./artists/frank.jpg", "06", "neosoul")
var artist7 = new Artist("Beyonce", "./artists/beyonce.jpg", "07", "rnb")

var artists = [artist1, artist2, artist3, artist4, artist5, artist6, artist7]
artists.push(new Artist("Mick Jenkins", "./artists/mickjenkins.jpg", "08", "hiphop"))
artists.push(new Artist("Skepta", "./artists/skepta.jpg", "09", "grime"))

//Function to display all artist
function displayArtists() {
    var html = "";
    for (i = 0; i < artists.length; i++) {
        html += artists[i].createArtist();
    }
    
    var display = document.getElementById("showArtists");
    display.innerHTML = html;
}

displayArtists();
