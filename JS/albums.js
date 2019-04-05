class Album {
    constructor(title, artist, genre, date, cover, artistId, albumId, price, genreId, youtube){
        this.title = title
        this.artist = artist
        this.genre = genre
        this.date = date
        this.cover = cover
        this.artistId = artistId
        this.albumId = albumId
        this.price = price
        this.genreId = genreId
        this.youtube = youtube 
    }
    
    // Creates a new html file for each album
    createHTML() {
        return "<div class='column' onclick='albumPage(\"" + this.albumId +"\")'><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + " " + this.artist +  "</p><h1 style='color:green'>" + this.price + "</h1></div>"
    }
    createAlbumList() {
        return "<div class='column' onclick='albumPageArtist(\"" + this.albumId +"\")' ><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + "</p><h1 style='color:green'>" + this.price + "</h1><p><button id='addCart'>Add to Cart</button></p></div>"
    }
    albumDisplayPage() {
        return "<div class='column'><h1 style='color:green'>" + this.price + "</h1><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + "</p><p><button id='addCart'>Add to Cart</button></p></div>"
    } 
    albumInfo() {
        return "<div class='column'><ul style='list-style-type:none' id='albumInfo'><li>" + this.title + "</li><li>" + this.artist + "</li><li>" + this.genre + "</li></ul></div>"
    }
    displayNewReleases() {
        return "<div class='column' onclick='albumPageNew(\"" + this.albumId +"\")'><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + " " + this.artist +  "</p><h1 style='color:green'>" + this.price + "</h1><p><button id='addCart'>Add to Cart</button></p></div>"
    }
    albumDisplayPageArtist() {
        return "<div class='column'><h1 style='color:green'>" + this.price + "</h1><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + "</p><p><button id='addCart'>Add to Cart</button></p></div>"
    }
 
    genreDisplayPage() {
        return "<div class='column' onclick='genrePage(\"" + this.genreId +"\")'><img style='width:100%' src=" + this.cover + "></img><p>" + this.title + " " + this.artist + "</p><h1 style='color:green'>" + this.price + "</h1><p><button id='addCart'>Add to Cart</button></p></div>" 
    }
    youtubeSample() {
        return "<div class='column'><button id='youtube' class='youtubebtn' data-youtube=" + this.youtube + "></button></div>"
    }
    

}
//Elements of the class
<<<<<<< HEAD
var albums = []
albums.push(new Album("DAMN.","Kendrick Lamar","Hip Hop",false, "./covers/damn.png", "01", "01", "$7.99", "01", "https://youtu.be/tvTRZJ-4EyI"))
albums.push(new Album("B4.DA.$$","Joey Bada$$","Hip Hop",false, "./covers/badass.jpg", "02", "02", "$8.49", "01"))
albums.push(new Album("SELF-TITLED","Kids See Ghosts","Hip Hop", true, "./covers/ksg.jpg", "03", "03", "$9.99", "01"))
albums.push(new Album("SLIME SEASON 3","Young Thug","Hip Hop",false, "./covers/slime_season_3.jpg", "04", "04", "$6.00", "01"))
albums.push(new Album("RODEO","Travis Scott","Hip Hop",false, "./covers/rodeo.jpg", "05", "05", "$8.99", "01"))
albums.push(new Album("CHANNEL ORANGE","Frank Ocean","Neo Soul",false, "./covers/channel_orange.jpg", "06", "07", "$7.49", "02"))
=======
var albums = [];
var album1 = new Album("DAMN.","Kendrick Lamar","Hip Hop",false, "./covers/damn.png", "01", "01", "$7.99", "01", "https://youtu.be/tvTRZJ-4EyI")
var album2 = new Album("B4.DA.$$","Joey Bada$$","Hip Hop",false, "./covers/badass.jpg", "02", "02", "$8.49", "01", "https://www.youtube.com/watch?v=C2lrvZlbHNk")
var album3 = new Album("SELF-TITLED","Kids See Ghosts","Hip Hop", true, "./covers/ksg.jpg", "03", "03", "$9.99", "01", "https://www.youtube.com/watch?v=7hd65jvahmA")
var album4 = new Album("SLIME SEASON 3","Young Thug","Hip Hop",false, "./covers/slime_season_3.jpg", "04", "04", "$6.00", "01", "https://www.youtube.com/watch?v=mEzRQYDVD_4")
var album5 = new Album("RODEO","Travis Scott","Hip Hop",false, "./covers/rodeo.jpg", "05", "05", "$8.99", "01", "https://www.youtube.com/watch?v=KnZ8h3MRuYg")
var album6 = new Album("CHANNEL ORANGE","Frank Ocean","Neo Soul",false, "./covers/channel_orange.jpg", "06", "07", "$7.49", "02", "https://www.youtube.com/watch?v=-qaO-i5rD9Y")
>>>>>>> e6b532fa6478d0e140ded29d3b1954810bb26e23

//Array that stores Album class elements

// var albums = [album1, album2, album3, album4, album5, album6];

//Adds new albums

albums.push(new Album("ASTROWORLD", "Travis Scott", "Hip Hop", true, "./covers/astroworld.jpg", "05", "08", "$12.99", "01", "https://www.youtube.com/watch?v=Z6d3BofQqN0" ))
albums.push(new Album("LEMONADE", "Beyonce", "R&B", false, "./covers/lemonade.jpg", "07", "09", "$8.49", "03", "https://www.youtube.com/watch?v=WDZJPJV__bQ"))
albums.push(new Album("1999", "Joey Bada$$", "Hip Hop", false, "./covers/1999.jpg", "02", "10", "$5.55", "01", "https://www.youtube.com/watch?v=51e1gIkzHgk"))
albums.push(new Album("THE WATER[S]", "Mick Jenkins", "Hip Hop", false, "./covers/waters.jpg", "08", "11", "$4.50", "01", "https://www.youtube.com/watch?v=F-4KiszXxHM"))
albums.push(new Album("KONNICHIWA", "Skepta", "Grime", false, "./covers/konnichiwa.jpg", "09", "12", "$7.99", "04", "https://www.youtube.com/watch?v=czLQoG01PFs"))
albums.push(new Album("OXNARD", "Anderson .Paak", "R&B", true, "./covers/oxnard.jpg", "10","13", "$11.99", "03", "https://www.youtube.com/watch?v=yZlEj8XRLAw"))

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