// Manages storage, counting and deletion of cart items 

function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }
  
  function addToCart(productName, price) {
    const cart = getCart();
    cart.push({ name: productName, price: price }); // save object instead of string
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
  
  function updateCartCount() {
    const cart = getCart();
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.innerText = cart.length;
  }
  
  function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload(); // refresh to reflect change
  }
  
  function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
  }