const buttons = document.getElementsByClassName('add-cart-btn')
console.log(buttons);
for (let i = 0; i< buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let quantity = buttons[i].previousElementSibling.value 
        addToCart(event.target.dataset.id, Number(quantity))
    }) 
}

const saveCart = () => {
    localStorage.setItem('cart',JSON.stringify(cart))
}

const getCart = () => {
        return cart
}

const 