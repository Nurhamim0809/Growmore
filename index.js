const cart = JSON.parse(localStorage.getItem('cartItems')) || [];

document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const name = product.querySelector('h3').innerText;
        const price = product.querySelector('p').innerText;

        const item = { name, price };
        cart.push(item);

        // Save to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cart));

        alert(`${name} added to cart!`);
        console.log("Cart:", cart);
    });
});