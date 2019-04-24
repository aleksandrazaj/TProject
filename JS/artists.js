//New class to store information about artists
class Artist {
    constructor(name, pic, id, artistGenre) {
    this.name = name
    this.pic = pic
    this.id = id
    this.artistGenre = artistGenre }

    //Creates HTML column divs for every artist at artists.html
    createArtist() {
        return "<div class='column' onclick='displayArtistAlbums(\"" + this.id +"\")'><img style='width:100%' src=" + this.pic + "></img><p>" + this.name + "</p></div>"
    }
}

var artists = []
artists.push(new Artist("Kendrick Lamar", "./artists/kendrick.png", "01", "hiphop"))
artists.push(new Artist("Joey Bada$$", "./artists/joey.jpg", "02", "hiphop"))
artists.push(new Artist("Kids See Ghosts", "./artists/ksg.jpg", "03", "hiphop"))
artists.push(new Artist("Young Thug", "./artists/young.jpg", "04", "hiphop"))
artists.push(new Artist("Travis Scott", "./artists/travisscott.jpg", "05", "hiphop"))
artists.push(new Artist("Frank Ocean", "./artists/frank.jpg", "06", "neosoul"))
artists.push(new Artist("Beyonce", "./artists/beyonce.jpg", "07", "rnb"))
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
