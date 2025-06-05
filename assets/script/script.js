// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Carousel functionality
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Automatic slider
setInterval(nextImage, 3000);

// Fetch products from API
fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data) => { displayProducts(data.products) })
function displayProducts(data) {
    let productsContainer = document.querySelector('.products_cards');
    let p = ``;
    for (let i = 0; i < data.length; i++) {
        p = `<div class="card">
            <img src="${data[0].thumbnail}" alt="Product ${data[0].id}">
            <h3>${data[0].title}</h3>
            <p>${data[0].description}</p>
            <button>Add to Cart</button>
        </div>
        <div class="card">
            <img src="${data[1].thumbnail}" alt="Product ${data[1].id}">
            <h3>${data[1].title}</h3>
            <p>${data[1].description}</p>
            <button>Add to Cart</button>
        </div>
        <div class="card">
            <img src="${data[2].thumbnail}" alt="Product ${data[2].id}">
            <h3>${data[2].title}</h3>
            <p>${data[2].description}</p>
            <button>Add to Cart</button>
        </div>
        <div class="card">
            <img src="${data[3].thumbnail}" alt="Product ${data[3].id}">
            <h3>${data[3].title}</h3>
            <p>${data[3].description}</p>
            <button>Add to Cart</button>
        </div>`;
    };
    productsContainer.innerHTML = p;
}



// Scroll to top button
const toTopBtn = document.getElementById('toTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}