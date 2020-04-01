var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price =  Math.floor(Math.random() * (100 * 1) + 1)
 cart.push(Object.assign({},{itemName: item, itemPrice: price}))
console.log(viewCart())
console.log(total())
 return cart 
}

console.log(addToCart("pencil"))
console.log(addToCart("car"))
console.log(addToCart("bed"))

function viewCart() {
  if(cart.length > 0){
  var message = "In your cart, you have"
  for (i = 0; i < cart.length-1; i++){
    message = message + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
  var index = cart.length-1
  return message + ` and ${cart[index].itemName} at $${cart[index].itemPrice}.`
  } else{
    return "Your shopping cart is empty."
  }
}

console.log(addToCart())

function total() {
  var add = 0
  for (i = 0; i < cart.length; i++){
    add = add + cart[i].itemPrice
  }
  return add
}



function removeFromCart(item) {
  if(item){
    
  } else {
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
