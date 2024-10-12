document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const rating = document.getElementById('rating').value;
    const comment = this.querySelector('textarea').value;

    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review-item');
    reviewDiv.innerHTML = `
        <h4>Rating: <span class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</span></h4>
        <p>${comment}</p>
    `;

    document.getElementById('reviews').appendChild(reviewDiv);
    
    this.reset();
});


//
// For Contact Form submission (basic functionality)
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});

// Add animations, smooth scroll, or dynamic content loading here

document.getElementById('see-all-products').addEventListener('click', function() {
    window.location.href = 'all-products.html'; // Redirects to the product catalog
});
//
let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(productName + " has been added to your cart!");
    updateCart();
}

function updateCart() {
    let cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Reset cart display
    cart.forEach((product, index) => {
        cartContainer.innerHTML += `<p>${product.name} - $${product.price}</p>`;
    });
}



////////

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    }
}
