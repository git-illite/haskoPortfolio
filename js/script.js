function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      navbar.classList.add("bg-blue-950");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-blue-300");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
