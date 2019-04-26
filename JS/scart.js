var cart = [2]

function loadAlbums () {
    return albums
    
}
loadAlbums();
console.log(albums);

const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

// Create a function to find a product/item based on it's ID
// The function should take both the array and ID as inputs
const findProductById = (albumData, id) => {
    const product = albumData.find((product) => {
            return product.albumId === id
    })

    return product
}


/**
* SHOPPING CART
*/

// Create a function that adds a product by it's ID and its quantity to the shopping cart
const addToCart = (id) => {
    console.log(`${id} has ben added`);
    if (!findProductById(cart, id)) {
            cart.push({...findProductById(albums, id)})
    } else {
            alert("Already in the cart")
    }
    saveCart()
}


// Create a function that loads the cart from localStorage
const loadCart = function() {
    if (localStorage.getItem('cart') === null) {
            cart = []
    } else {
            cart = JSON.parse(localStorage.getItem('cart'))
    }

    // localStorage.getItem('cart') === null ? cart = [] : cart [] = JSON.parse(localStorage.getItem('cart'))
}

// Create a function that returns the current shopping cart
const getCart = () => {
    return cart
}


// Create a function that calcualtes the total price of the cart
const calculteTotal = () => {
    let total = 0

    cart.forEach((item) => {
            total += item.price * item.quantity
    })

    return total
}


// Make sure to load the cart array
loadCart()