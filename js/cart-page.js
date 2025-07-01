// Displays list + remove buttons 
document.addEventListener("DOMContentLoaded", function () {
    const cartList = document.getElementById("cart-list");
    const cart = getCart();
  
    if (cart.length === 0) {
      cartList.innerHTML = '<li class="list-group-item">Your cart is empty.</li>';
    } else {
      cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})">Remove</button>
      `;
        cartList.appendChild(li);
      });
    }
  });