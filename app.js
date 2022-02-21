const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const logo = document.querySelector("#logo");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    logo.classList.toggle("remove-logo");
    burger.classList.toggle("toggle");
    burger.style.marginLeft = "auto";
    body.classList.toggle("overflow");
  });
};
navSlide();
