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
  return `<div class='bttn' onclick='checkoutPage()' >Checkout</div>`
}


function checkoutPage() {
  location.href='checkout.html'
}

//HTML for total price display
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
//iterates through the buttons
for (let i = 0; i < removeButtons.length; i++) {
  var button1 = removeButtons[i]
  //assigns an event listener to each button
  button1.addEventListener('click', function(event){
    var buttonClicked = event.target
    //two parentElement method used to remove the entire div (not the divs inside the div)
    buttonClicked.parentElement.parentElement.remove()
    //load the cart again
    loadCart()
    //remove the element from the cart
    cart.splice(i)
    console.log(cart)
    //save the cart again for later use
    saveCart();
    calculateTotal();
  })
  
}

//Function to calculate total price of the order
const calculateTotal = () => {
  //gets the cart
  const cart = getCart()
  //empty array to store the values
  var priceArray = []
  //base for summation
  var sum = 0
  //goes through the cart
  for (let i = 0; i < cart.length; i++) {
    //push each value to the array
  var priceValues = cart[i].price
  priceArray.push(priceValues) }
  for (let i = 0; i < priceArray.length; i++) {
    //sum up
    sum += priceArray[i]
  }
 console.log(sum) 
 //display the sum
 document.getElementById('total').innerHTML = "Total price: $" + sum
 
localStorage.setItem('total', JSON.stringify(sum))

 }

 calculateTotal();






