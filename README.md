<!DOCTYPE html>
<html lang="en">
<head>
<title>Music Store Prototype 2</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/* Style the header */
.header {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
  font-family: helvetica;
}

/* Style the top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Style the topnav links */
.topnav a {
  float:left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: helvetica;
}

/* Change color on hover */
.topnav a:hover {
  background-color: #FFC4C4;
  color: black;
}

/* Create three unequal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
  padding: 40px;
  font-family: helvetica;
}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column.side, .column.middle {
    width: 100%;
  }
}

/* Style the footer */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.column {
  position: relative;
  
  margin: 3%;
  overflow: hidden;
  width: 400px;
}
.column img {
  max-width: 100%;
  
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.column:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

p {
  border-bottom: 4px solid #f2f2f2;
}

</style>
</head>
<body>

<div class="header">
  <h1>Music Store Prototype 2</h1>
</div>

<div class="topnav" id="theTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#newreleases">New releases</a>
  <a href="#genres">Genres</a>
  <a href="#artists">Artists</a>
  <a href="#support">Support</a>
  <a href="#cart">Go to cart</a>
  
  </div>
</div>

<div class="row">
        <div class="column">
          <img src="damn.png" id="damn" style="width:100%" onclick="myFunction()">
          <p>Kendrick Lamar - DAMN.</p>
        </div>
        
        <div class="column">
          <img src="b4dass.jpg" id="b4da$$" style="width:100%">
          <p>Joey Bada$$ - B4.DA.$$</p>
        </div>
        
        <div class="column">
          <img src="kidsseeghost.jpg" id="kds_self_titled" style="width:100%">
          <p>Kids See Ghosts - Self-Titled</p>
        </div>
      
        <div class="column">
          <img src="Slime_Season_3_Cover.jpg" id="slime3" style="width:100%">
          <p>Young Thug - Slime Season 3</p>
        </div> 

        <div class="column">
          <img src="rodeo.jpg" id="rodeo" style="width:100%">
          <p>Travis Scott - Rodeo</p>
        </div>

        <div class="column">
          <img src="channel_orange.jpg" id="channel_orange" style="width:100%">
          <p>Frank Ocean - Channel Purple</p>
        </div>
      </div>

<div class="footer">
  <h1>Fuck iTunes</h1>
</div>

<script>

</script>

  
</body>
</html>
