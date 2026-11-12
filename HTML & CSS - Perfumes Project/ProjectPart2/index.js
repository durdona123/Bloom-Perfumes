/*
ID:23413497
Name: Durdona Asrorova
File name:index.js
Descriptions: js works for all the other html pages
*/
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(index) {
  let cart = getCart();
  let product = products[index];

  let existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();
}
function updateCartCount() {
  let cart = getCart();
  let total = 0;

  cart.forEach(item => total += item.quantity);

  document.getElementById("cart-count").innerText = total;
}
