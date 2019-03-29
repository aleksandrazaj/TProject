// var uniqueArtists = [];
// for (let i = 0; i < albums.length; i++) {


    
//     // if (uniqueArtists.length === 0) {
//     //     uniqueArtists.push(albums[i])
//     // }

//     // for(let n = 0; n < uniqueArtists.length; n++) {
        
//     //     if (!uniqueArtists[n].artist === albums[i].artist) {
//     //         uniqueArtists.push(albums[i])
//     //     }
//     // }

// }

// var albumMap = albums.map((item) => {
//     return item.artist
// })

// var uniqueAlbums = albumMap.filter(function (item, index) {
//     return albumMap.indexOf(item) >= index
// })






// console.log(uniqueAlbums);

class Artist {
    constructor(name, pic,) {
    this.name = name
    this.pic = pic }

    createArtist() {
        return "<div class='column'><img style='width:100%' src=" + this.pic + "></img><p>" + this.name + "</p></div>"
    }
}

var artist1 = new Artist("Kendrick Lamar", "./artists/kendrick.jpg")
var artist2 = new Artist("Joey Bada$$", "./artists/joey.jpg")
var artist3 = new Artist("Kids See Ghosts", "./artists/kanyex2.jpg")
var artist4 = new Artist("Young Thug", "./artists/young.jpg")
var artist5 = new Artist("Travis Scott", "./artists/travisscott.jpg")
var artist6 = new Artist("Frank Ocean", "./artists/frank.jpg")
var artist7 = new Artist("Beyonce", "./artists/beyonce.jpg")

var artists = [artist1, artist2, artist3, artist4, artist5, artist6, artist7]

function displayArtists() {
    var html = "";
    for (i = 0; i < artists.length; i++) {
        html += artists[i].createArtist();
    }
    
    var display = document.getElementById("showArtists");
    display.innerHTML = html;
}

displayArtists();

/* var artists = albums.map(function (item) {
    return item.artist })
    
    var artistsUnique = artists.filter(function (item, index) {
        return artists.indexOf(item) >= index;
    })
    */

   //const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

   //let unique = [...new Set(names)];