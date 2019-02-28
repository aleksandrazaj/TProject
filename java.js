
class Album {
    constructor(title, artist, genre, date, cover){
    this.title = title
    this.artist = artist
    this.genre = genre
    this.date = date}
}

var album1 = new Album("DAMN.","Kendrick Lamar","Hip Hop",false)
var album2 = new Album("B4.DA.$$","Joey Bada$$","Hip Hop",false)
var album3 = new Album("Self-Titled","Kids See Ghosts","Hip Hop",true)
var album4 = new Album("Slime Season 3","Young Thug","Hip Hop",false)
var album5 = new Album("Rodeo","Travis Scott","Hip Hop",false)
var album6 = new Album("Channel Orange","Frank Ocean","Hip Hop",false)


var albums = [album1, album2, album3, album4, album5, album6];

function printAlbums() {
    for (let i = 0; i < albums.length; i++) {
        console.log(albums[i].title)
    }
}

printAlbums();

//var albums = []
//albums.push(album1)


// var albums = [album1]


// Create an array of albums
// Create a function to print all albums
// create a function only print album titles
// Create a function to add a new album
// Create a function to delete an album (by Index, by Title)