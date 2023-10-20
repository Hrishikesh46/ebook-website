// Add custom JavaScript here
function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 75) {
      console.log(window.scrollY);
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

// we want the above function to be loaded when we Dom content is loaded in the document
document.addEventListener("DOMContentLoaded", userScroll);
