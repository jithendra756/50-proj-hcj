const addToCartBtn = document.querySelector(".add-to-cart");
const cartMsg = document.getElementById("cartMsg");

addToCartBtn.addEventListener("click", () => {
  // Show message
  cartMsg.classList.add("show");

  // Add a small button animation
  addToCartBtn.style.transform = "scale(0.9)";
  setTimeout(() => (addToCartBtn.style.transform = "scale(1)"), 150);

  // Hide message after 2 seconds
  setTimeout(() => {
    cartMsg.classList.remove("show");
  }, 2000);
});
