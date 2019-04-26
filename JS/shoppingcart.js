
var cart = [2]

//Loads the current database of albums
function getAlbums() {
    return albums
}

getAlbums();

// Finds album by ID
const findProductById = (albumData, id) => {
    const product = albumData.find((product) => {
            return product.albumId === id
    })

    return product
}


const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}


//Adds quantity and album by ID
const addToCart = (id, quant) => {
    console.log(`${id} has ben added`);
    if (!findProductById(cart, id)) {
            cart.push({...findProductById(albums, id), quantity: quant})
    } else {
            alert("Already in the cart")
    }
    saveCart()
}

findProductById();



//Loads the cart from local storage
const loadCart = function() {
    if (localStorage.getItem('cart') === null) {
        cart = []
    } else {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}

//Returns current shopping cart
const getCart = () => {
    return cart
}
//Calculates the total price
const calculateTotal = () => {
    let total = 0

    cart.forEach((item) => {
        total += item.price
    })
    return total
}

loadCart()
