function navPlaceholder() {
  const nav = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-color">
      <div class="container text-center">
        <div class="navbar-logo">
          <a class="navbar-brand" href="home.html">
            <img
              src="../assignment/assets/images/logo.svg"
              alt="Logo"
              width="100%"
              height="auto"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-0 mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="Home.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Products.html">Our Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="About.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Contact-Us.html">Contact us</a>
            </li>
            <div class="login-btn-mobile">
              <a class="btn btn-outline-light" href="Login.html">Login</a>
            </div>
          </ul>
        </div>
        <div class="login-btn">
          <a class="btn btn-outline-light" href="Login.html">Login</a>
        </div>
      </div>
    </nav>
    `;
  document.querySelector(".nav-placeholder").innerHTML = nav;
}

document.addEventListener("scroll", () => {
  const toTopBTN = document.querySelector(".navbar-color");
  if (window.scrollY > 200) {
    toTopBTN.classList.add("scrolled");
  } else {
    toTopBTN.classList.remove("scrolled");
  }
});

document.addEventListener("scroll", () => {
  const toTopBTN = document.querySelector(".to-top");
  if (window.scrollY > 200) {
    toTopBTN.classList.add("show");
  } else {
    toTopBTN.classList.remove("show");
  }
});

function toTop() {
  const goTopBTN = `
        <a href="#">
        <div class="to-top">
          <i class="fa-solid fa-arrow-up"></i>
        </div>
        </a>
        `;
  document.querySelector(".top-btn").innerHTML = goTopBTN;
}

function productsFetch() {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    });
  function displayData(data) {
    let m = ``;
    for (let i = 0; i < data.length; i++) {
      m += `
        <div class="col">
        <div class="card">
        <img
        src="${data[i].thumbnail ? data[i].thumbnail : "img2.jpg"}"
        class="card-img-top"
        alt="img-1"
        />
        <div class="card-body">
        <h5 class="card-title">${data[i].title
          .split(" ")
          .slice(0, 3)
          .join(" ")}...</h5>
        <p class="card-text">${data[i].description
          .split(" ")
          .slice(0, 10)
          .join(" ")}...</p>
        </p>
        <a href="single-product.html?${
          data[i].id
        }" class="btn btn-dark" id="spa-btn">Buy Now</a>
        </div>
        </div>
        </div>`;
    }
    document.querySelector("#products-cards-display").innerHTML = m;
  }
}

function footerPlaceholder() {
  const footer = `
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              this is a project for the <strong>5alefa el negm</strong> course,
              designed to showcase my skills in web development.
            </p>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="Home.html" class="text-decoration-none text-white"
                  >Home</a
                >
              </li>
              <li>
                <a href="About.html" class="text-decoration-none text-white"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="Contact-Us.html"
                  class="text-decoration-none text-white"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul class="list-inline social-icons">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/" class="text-white"
                  ><i class="fa-brands fa-facebook"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="https://x.com/" class="text-white"
                  ><i class="fa-brands fa-square-x-twitter"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com/" class="text-white"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="mb-4" />
        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              &copy; 2025 <strong>5alefa el negm</strong> project. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>`;
  document.querySelector("#footer-placeholder").innerHTML = footer;
}

navPlaceholder();
footerPlaceholder();
toTop();
productsFetch();
