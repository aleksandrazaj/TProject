var differentAlbums = [{
    title: "DAMN"
    artist: "Kendrick Lamar"
    genre: "Hip Hop"
    date: false 
    cover:
}, {
    title: "B4.DA.$$"
    artist: "Joey Bada$$"
    genre: "Hip Hop"
    date: false 
    cover:
}, {
    title: "Self-Titled"
    artist: "Kids See Ghosts"
    genre: "Hip Hop"
    date: true
    cover:
}, {
    title: "Slime Season 3"
    artist: "Young Thug"
    genre: "Hip Hop"
    date: false
    cover:
}, {
    title: "Rodeo"
    artist: "Travis Scott"
    genre: "Hip Hop"
    date: false
    cover:
}, {
    title: "Channel Orange"
    artist: "Frank Ocean"
    genre: "Hip Hop"
    date: false
    cover:
}]


class Album {
    constructor(title, artist, genre, date, cover){
    this.title = title
    this.artist = artist
    this.genre = genre
    this.date = date 
    this.cover = cover}
}

new Album("DAMN","Kendrick Lamar","Hip Hop",false,)
new Album("B4.DA.$$","Joey Bada$$","Hip Hop",false,)
new Album("Self-Titled","Kids See Ghosts","Hip Hop",true,)
new Album("Slime Season 3","Young Thug","Hip Hop",false,)
new Album("Rodeo","Travis Scott","Hip Hop",false,)
new Album("Channel Orange","Frank Ocean","Hip Hop",false,)



