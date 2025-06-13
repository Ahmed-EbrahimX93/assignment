function navPlaceholder() {
  const nav = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-color">
    <div class="container text-center">
      <div class="navbar-logo">
        <a class="navbar-brand" href="home.html">
          <img src="../assignment/assets/images/logo.svg" alt="Logo" width="100%" height="auto"
            class="d-inline-block align-text-top" />
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-0 mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="Home.html">Home</a>
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
          ${
            JSON.parse(localStorage.getItem("role"))
              ? `<li class="nav-item">
            <a class="nav-link" href="Dashboard.html">Dashboard</a>
          </li>`
              : ""
          }
          
          ${
            JSON.parse(localStorage.getItem("userName"))
              ? `
          <div class="signout-btn-mobile">
            <a class="btn btn-outline-light" onclick="signOut()">Signout</a>
          </div>
          <div class="logged-in-user-mobile py">${JSON.parse(
            localStorage.getItem("userName")
          )}<div>
              `
              : `
              <div class="login-btn-mobile">
                <a class="btn btn-outline-light" href="Login.html">Login</a>
              </div>`
          }
        </ul>
      </div>
      ${
        JSON.parse(localStorage.getItem("userName"))
          ? `<div class="logged-in-user">${JSON.parse(
              localStorage.getItem("userName")
            )}<div>
          <div class="signout-btn">
            <a class="btn btn-outline-light" onclick="signOut()">Signout</a>
          </div>`
          : `
          <div class="login-btn">
            <a class="btn btn-outline-light" href="Login.html">Login</a>
          </div>`
      }
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
    <a href = "#" >
      <div class="to-top">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
        </a >
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
            <img src="${
              data[i].thumbnail ? data[i].thumbnail : " img2.jpg"
            }" class="card-img-top" alt="img-1" />
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
        </div> `;
    }
    document.querySelector("#products-cards-display").innerHTML = m;
  }
}

function loadMoreProducts() {
  document.querySelector("#load-more-btn").addEventListener("click", () => {
    window.location.href = "Products.html";
  });
}

function footerPlaceholder() {
  const footer = `
    <div class="container" >
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
      </div > `;
  document.querySelector("#footer-placeholder").innerHTML = footer;
}

function collectData() {
  const inputs = document.querySelectorAll("input");
  const submitBtn = document.getElementById("submit-btn");
  const nameInput = document.getElementById("contactUsName");
  const emailInput = document.getElementById("contactUsEmail");
  const messageInput = document.getElementById("contactUsFeedback");
  let usersFeedback = [];

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    pushFeedbackData();
    errorDisplay();
    clearData();
  });

  function pushFeedbackData() {
    let contactUsFeedback = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    if (
      nameInput.value.length != 0 &&
      emailInput.value.length != 0 &&
      messageInput.value.length != 0
    ) {
      usersFeedback.push(contactUsFeedback);
    }
  }

  function errorDisplay() {
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const nError = `<p> Please Enter your name</p> `;
    const eError = `<p> Please Enter your email</p> `;
    const mError = `<p> Please Enter your message</p> `;
    if (nameInput.value.length == 0) {
      nameError.innerHTML = nError;
      nameError.style.color = "red";
    } else if (emailInput.value.length == 0) {
      emailError.innerHTML = eError;
      emailError.style.color = "red";
    } else if (messageInput.value.length == 0) {
      messageError.innerHTML = mError;
      messageError.style.color = "red";
    } else {
      nameError.style.display = "none";
      emailError.style.display = "none";
      messageError.style.display = "none";
      displayData();
    }
  }

  function clearData() {
    inputs.forEach((input) => (input.value = ""));
  }

  function displayData() {
    const display = document.querySelector(".cuFeedback");
    let output = ``;
    for (let i = 0; i < usersFeedback.length; i++) {
      output = `
    <h2 class="text-center"> Feedbacks</h2 >
      <div class="feedback-list" id="feedback-list">
        <div class="feedback-item border rounded-4 p-3 m-3">
          <div class="feedback">
            <h3 class="feedback-name">${nameInput.value}</h3>
            <p class="feedback-email">${emailInput.value}</p>
            <p class="feedback-message">${messageInput.value}</p>
          </div>
          <button class="btn btn-outline-danger" type="button" id="delete-btn-${i}">Delete</button>
        </div>
      </div>
  `;
    }
    display.innerHTML = output;

    for (let i = 0; i < usersFeedback.length; i++) {
      const deleteBtn = document.getElementById(`delete-btn-${i}`);
      deleteBtn.addEventListener("click", () => deleteData(i));
    }
  }
  function deleteData(index) {
    usersFeedback.splice(index, 1);
    displayData();
  }
}

function spaDisplay() {
  const id = window.location.search.slice(1);
  fetch(`http://localhost:3000/products/${id}`)
    .then((res) => res.json())
    .then((product) => spaDataDisplay(product));
  function spaDataDisplay(product) {
    let x = ``;
    x = `
        <div class="col-md-6 mb-4">
          <img
            src="${product.thumbnail ? product.thumbnail : "img2.jpg"}"
            alt="Product"
            class="img-fluid rounded mb-3 product-image"
            id="mainImage"
          />
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="mb-3">${product.title}</h2>
          <p class="text-muted mb-4">SKU: ${product.sku}</p>
          <div class="mb-3">
            <span class="h4 me-2">$${product.discountPercentage}</span>
            <span class="text-muted"><s>$${product.price}</s></span>
          </div>
          <p class="mb-4">${product.description}</p>
          <div class="mb-4">
            <label for="quantity" class="form-label">Quantity:</label>
            <input
              type="number"
              class="form-control"
              id="quantity"
              value="1"
              min="1"
              style="width: 80px"
            />
          </div>
          <button class="btn btn-dark btn-lg mb-3 me-2 add-to-cart-btn" onclick="addToCart()">
            <i class="bi bi-cart-plus"></i> Add to Cart
          </button>
          <div class="spinner-border d-none" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        `;
    document.querySelector("#spa-display").innerHTML = x;
  }
}

function addToCart() {
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  const spinner = document.querySelector(".spinner-border");
  addToCartBtn.addEventListener("click", () => {
    addToCartBtn.classList.add("d-none");
    spinner.classList.remove("d-none");
    setTimeout(() => {
      spinner.classList.add("d-none");
      addToCartBtn.classList.remove("d-none");
      addToCartBtn.innerHTML = `<i class="bi bi-check-circle"></i> Added to Cart`;
    }, 1000);
    setTimeout(() => {
      addToCartBtn.innerHTML = `<i class="bi bi-cart-plus"></i> Add to Cart`;
    }, 2000);
  });
}

function register() {
  const inputs = document.querySelectorAll("input");
  const registerBtn = document.getElementById("register-btn");
  const nameInput = document.getElementById("Name");
  const emailInput = document.getElementById("Email");
  const passwordInput = document.getElementById("Password");
  const emailRegex = /^[a-z]{3,}@(gmail||yahoo).com$/;
  const passwordRegex = /^[0-9]{8,}$/;
  let error = false;
  const usersData =
    [] ||
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => (usersData = data));

  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    errorDisplay();
  });

  function errorDisplay() {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length == 0) {
        inputs[i].previousElementSibling.style.color = "red";
        inputs[
          i
        ].previousElementSibling.innerHTML = `${inputs[i].name} is Required`;
        error = true;
      }
    }

    if (emailInput.value.length != 0 && !emailRegex.test(emailInput.value)) {
      emailInput.previousElementSibling.style.color = "red";
      emailInput.previousElementSibling.innerHTML =
        "the email should be at least 3 chars and contains gmail or yahoo";
      error = true;
    }

    if (
      passwordInput.value.length != 0 &&
      !passwordRegex.test(passwordInput.value)
    ) {
      passwordInput.previousElementSibling.style.color = "red";
      passwordInput.previousElementSibling.innerHTML =
        "the password should be at least 8 chars";
      error = true;
    }

    if (!error) {
      let registerData = {
        id: Date.now(),
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };

      if (
        nameInput.value.length != 0 &&
        emailInput.value.length != 0 &&
        passwordInput.value.length != 0
      ) {
        fetch("http://localhost:5000/users")
          .then((response) => response.json())
          .then((data) => {
            const existingUser = data.find(
              (user) => user.email === registerData.email
            );
            if (existingUser) {
              let timerInterval;
              Swal.fire({
                title: "Email already exists!",
                html: "Please login in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                  const timer = Swal.getPopup().querySelector("b");
                  timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                  }, 100);
                },
                willClose: () => {
                  clearInterval(timerInterval);
                },
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
                }
              });
            } else {
              fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
              })
                .then((response) => response.json())
                .then((data) => data);
              Swal.fire({
                title: "Registration successful!",
                icon: "success",
                draggable: true,
              });
            }
          });
        setTimeout(() => {
          window.location.href = "Login.html";
        }, 2000);
      }
      clearData();
    }
  }

  function clearData() {
    inputs.forEach((input) => (input.value = ""));
  }
}

function login() {
  const loginBtn = document.getElementById("login-btn");
  const emailInput = document.getElementById("Email");
  const passwordInput = document.getElementById("Password");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const userEmail = emailInput.value;
    const userPassword = passwordInput.value;

    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === userEmail);

        if (user) {
          if (
            user.email === "admin@gmail.com" &&
            user.password === "123456789"
          ) {
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            localStorage.setItem("userName", JSON.stringify(user.name));
            localStorage.setItem("role", JSON.stringify(user.name));

            Swal.fire({
              title: "Welcom Mr.Admin!",
              icon: "success",
              draggable: true,
            });
            setTimeout(() => {
              window.location.href = "Dashboard.html";
            }, 2000);
          } else {
            if (user.email === userEmail && user.password === userPassword) {
              localStorage.setItem("isLoggedIn", JSON.stringify(true));
              localStorage.setItem("userName", JSON.stringify(user.name));
              Swal.fire({
                title: "Login successful!",
                icon: "success",
                draggable: true,
              });
              setTimeout(() => {
                window.location.href = "Home.html";
              }, 2000);
            } else {
              Swal.fire({
                title: "Invalid credentials!",
                text: "Please check your credentials.",
                icon: "error",
                draggable: true,
              });
            }
          }
        } else {
          Swal.fire({
            title: "User not found!",
            text: "Please register first.",
            icon: "warning",
            draggable: true,
          });
        }
      });
  });
}

function signOut() {
  localStorage.removeItem("userName");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("role");
  window.location.href = "Home.html";
}

function addProduct() {
  const inputs = document.querySelectorAll("input");
  const addBtn = document.getElementById("add-p-btn");
  const pName = document.getElementById("product-name");
  const pDes = document.getElementById("product-description");
  const pPrice = document.getElementById("product-price");
  const pdPrice = document.getElementById("product-discount");
  const pSKU = document.getElementById("product-sku");
  const pImage = document.getElementById("product-image");
  let error = false;
  const productsData =
    [] ||
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((product) => (productsData = product));

  addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    errorDisplay();
  });

  function errorDisplay() {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.length == 0) {
        inputs[i].previousElementSibling.style.color = "red";
        inputs[
          i
        ].previousElementSibling.innerHTML = `${inputs[i].name} is Required`;
        error = true;
      }
    }

    if (!error) {
      let productData = {
        id: Date.now(),
        title: pName.value,
        description: pDes.value,
        price: pPrice.value,
        discountPercentage: pdPrice.value,
        sku: pSKU.value,
        images: pImage.value,
        thumbnail: pImage.value,
      };

      if (
        pName.value.length != 0 &&
        pDes.value.length != 0 &&
        pPrice.value.length != 0 &&
        pdPrice.value.length != 0 &&
        pSKU.value.length != 0 &&
        pImage.value.length != 0
      ) {
        fetch("http://localhost:3000/products")
          .then((response) => response.json())
          .then((data) => {
            const existingProduct = data.find(
              (product) => product.sku === productData.sku
            );
            if (existingProduct) {
              Swal.fire("Product already exists!");
            } else {
              fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
              })
                .then((response) => response.json())
                .then((product) => product);
              Swal.fire("Added Successfully!");
            }
          });
      }
      clearData();
    }
  }

  function clearData() {
    inputs.forEach((input) => (input.value = ""));
  }
}

function dashboardDisplay() {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((product) => {
      displayData(product);
    });
  function displayData(data) {
    let m = ``;
    for (let i = 0; i < data.length; i++) {
      m += `
            <div class="col">
          <div class="card">
            <img src="${
              data[i].thumbnail ? data[i].thumbnail : " img2.jpg"
            }" class="card-img-top" alt="img-1" />
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>
              <p class="card-text">${data[i].description}</p>
              </p>
            </div>
          </div>
        </div>
        `;
    }
    document.querySelector("#products-cards-display").innerHTML = m;
  }
}

if (document.querySelector(".nav-placeholder")) {
  navPlaceholder();
}

if (document.querySelector("#footer-placeholder")) {
  footerPlaceholder();
}

if (document.querySelector(".top-btn")) {
  toTop();
}

if (document.querySelector("#products-cards-display")) {
  productsFetch();
}

if (document.querySelector("#spa-display")) {
  spaDisplay();
}

if (document.querySelector(".dashboard-display")) {
  dashboardDisplay();
}
