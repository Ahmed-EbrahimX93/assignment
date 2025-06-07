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
navPlaceholder();

document.addEventListener("scroll", () => {
  const toTopBTN = document.querySelector(".navbar-color");
  if (window.scrollY > 200) {
    toTopBTN.classList.add("scrolled");
  } else {
    toTopBTN.classList.remove("scrolled");
  }
});

function spaDisplay() {
  const id = window.location.search.slice(1);
  fetch(`http://localhost:3000/products/${id}`)
    .then((res) => res.json())
    .then((product) => spaDataDisplay(product));
  function spaDataDisplay(product) {
    let x = ``;
    x = `
        <div class="col">
        <div class="card">
        <img
        src="${product.thumbnail ? product.thumbnail : "img2.jpg"}"
        class="card-img-top"
        alt="img-1"
        />
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}
        </p>
        <a href="#" class="btn btn-dark">Buy Now</a>
        </div>
        </div>
        </div>`;
    document.querySelector("#spa-display").innerHTML = x;
  }
}
spaDisplay();

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
