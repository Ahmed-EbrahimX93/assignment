document.addEventListener("scroll", () => {
  const toTopBTN = document.querySelector(".to-top");
  if (window.scrollY > 200) {
    toTopBTN.classList.add("show");
  } else {
    toTopBTN.classList.remove("show");
  }
});
