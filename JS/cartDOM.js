loadCart();

console.log(cart);


// Create a function that generates the DOM (Cart) structure
const generateCartDOM = () => {
    const shoppingCart = document.getElementById('cartDiv')
    const cart = getCart()

    let html = ''

    if (cart.length === 0) {
        html = '<h3>No items in shopping cart!</h3>'
    } else {
        cart.forEach((item) => {
            html += cartElement(item)
        })
    }

    shoppingCart.innerHTML = html
}

generateCartDOM() 

function cartElement(item) {
    return `<div class="item">
              <div class="buttons">
                <span class="delete-btn"></span>
              </div>
           
              <div class="image">
                <img class="image" src="${item.cover}" alt="" />
              </div>
           
              <div class="description">
                <span>${item.title}</span>
                <span>${item.artist}</span>
                <span>${item.genre}</span>
              </div>
              <div class="total-price">${item.price}</div>
            </div>`
}

