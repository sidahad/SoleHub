// Function to update cart count
function updateCartCount() {
    const cartCountElement = document.querySelectorAll('.cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.forEach(element => {
        element.textContent = cart.length;
    });
}

// Function to add an item to the cart
function addToCart(title, image, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ title, image, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

// Call updateCartCount on page load to ensure the cart count is correct
document.addEventListener('DOMContentLoaded', updateCartCount);