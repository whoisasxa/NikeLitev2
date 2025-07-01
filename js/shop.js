document.addEventListener("DOMContentLoaded", function () {
  // -------------------------------
  // SHOP PAGE: "Add to Cart" buttons
  // -------------------------------
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const card = this.closest(".card");
      const productName = card?.querySelector(".card-title")?.innerText;
      const priceText = card?.querySelector(".card-text")?.innerText;
      const priceMatch = priceText?.match(/\$([\d.]+)/);
      const price = priceMatch ? parseFloat(priceMatch[1]) : null;

      if (productName && price) {
        addToCart(productName, price); // from cart.js
        alert(`✅ ${productName} added to cart!`);
      }
    });
  });

  // -------------------------------
  // HOME PAGE: "Buy Now" buttons
  // -------------------------------
  const buyNowButtons = document.querySelectorAll(".buy-now");

  console.log("Buy Now buttons found:", buyNowButtons.length); // Debug

  buyNowButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation(); // Prevent double binding

      const product = this.getAttribute("data-product");
      const price = parseFloat(this.getAttribute("data-price"));

      console.log("Button clicked:", product, price); // Debug

      if (product && !isNaN(price)) {
        addToCart(product, price); // from cart.js
        alert(`${product} added to cart!`);
        // NOTE: No redirect to cart.html – stays on home page
      }
    });
  });

  // Always update cart count when the page loads
  updateCartCount();
});