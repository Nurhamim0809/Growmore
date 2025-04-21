document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');

    const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price}</span>
        `;

        cartContainer.appendChild(itemEl);

        // Remove $ sign before converting to float
        const price = parseFloat(item.price.replace('$', ''));
        total += price;
    });

    totalDisplay.textContent = total.toFixed(2);
});