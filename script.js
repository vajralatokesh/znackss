const cart = {};

function addToCart(item) {
  if (cart[item]) {
    cart[item]++;
  } else {
    cart[item] = 1;
  }

  updateCartCount();
  alert(`${item} added to cart!`);
}

function updateCartCount() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  document.getElementById("cart-count").textContent = count;
}

function checkout() {
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const itemsList = Object.entries(cart)
    .map(([item, qty]) => `${item} x${qty}`)
    .join(", ");

  const message = `Hello, I want to order these snacks: ${itemsList}`;
  const phoneNumber = "7337233543"; // 🔁 Replace with your WhatsApp number
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

function enterSite() {
  const intro = document.getElementById("intro");
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
  }, 500);
}
