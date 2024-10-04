// Simple cart functionality
let cart = [];

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.substring(1));

        cart.push({
            name: productName,
            price: productPrice
        });

        alert(`${productName} has been added to your cart!`);
    });
});
