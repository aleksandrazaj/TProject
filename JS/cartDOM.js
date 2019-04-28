loadCart();

console.log(cart);

getCart();

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
              <div class="remove-buttons">
                <span class="delete-btn" data-name=${item.title}></span>
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

var removeButtons = document.getElementsByClassName('delete-btn')
console.log(removeButtons);
for (let i = 0; i < removeButtons.length; i++) {
  var button1 = removeButtons[i]
  button1.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    loadCart()
    cart.splice(i,1)
    console.log(cart)
    saveCart();
  })
  
}


