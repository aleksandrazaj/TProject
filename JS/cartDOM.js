loadCart();
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
    //Adds checkout button at the end
    html += checkout()
    
    shoppingCart.innerHTML = html

  
}

generateCartDOM() 

//HTML for the checkout button
function checkout() {
  return `<div class='bttn' >Checkout</div>`
}

function totalDOM() {
  return `<p id='total'></p>`
}

//HTML for cart elements
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
              <div class="total-price">$${item.price}</div>
            </div>`
}

//Function to remove elements from the cart
//Get the "X" buttons
var removeButtons = document.getElementsByClassName('delete-btn')
console.log(removeButtons);
for (let i = 0; i < removeButtons.length; i++) {
  var button1 = removeButtons[i]
  button1.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    loadCart()
    cart.splice(i)
    console.log(cart)
    saveCart();
  })
  
}


const calculateTotal = () => {
  const cart = getCart()
  var priceArray = []
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
  var priceValues = cart[i].price
  priceArray.push(priceValues) }
  for (let i = 0; i < priceArray.length; i++) {
    sum += priceArray[i]
  }
 console.log(sum) 
 document.getElementById('total').innerHTML = "Total price: $" + sum

 }

 calculateTotal();






