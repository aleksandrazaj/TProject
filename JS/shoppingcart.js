var cart = []

//Loads the current database of albums
function getAlbums() {
    return albums
}

// Finds album by ID
const findProductById = (data, albumId) => {
    const selectedAlbum = data.find((selectedAlbum) => {
        return selectedAlbum.id === albumId
    })

    return selectedAlbum
}

// Saves the cart to local storage
const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

//Adds quantity and album by ID
const addToCart = (albumId, quant) => {
    console.log(`${albumId} has been added ${quant} times`);
    if (!findProductById(cart, albumId)) {
        cart.push({...findProductById(albums, albumId), quantity: quant})
    } else {
        findProductById(cart, albumId).quantity += quant
    }
    saveCart()
    }

const buttons = document.getElementsByClassName('add-cart-btn')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            addToCart(event.target.dataset.albumId)
        })
}

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
        total += item.price * item.quantity
    })
    return total
}

loadCart()
