//
// Hamburger menu
//
const navIcon = document.querySelector("#nav-icon");
const navMenu = document.querySelector(".nav-menu");

navIcon.addEventListener("click", () => navMenu.classList.toggle("display-on"));

window.addEventListener("click", function (e) {
  if (!navMenu.contains(e.target) && !navIcon.contains(e.target)) {
    navMenu.classList.remove("display-on");
  }
});
//
//
// Cick on Navigation Bar
//
const arrayNav = ["home", "team", "work", "news", "gallery", "contact"];
const navItems = Array.from(document.querySelectorAll(".nav-item"));

navItems.forEach((navItem) =>
  navItem.addEventListener("click", (e) => {
    if (window.location.pathname !== "index.html") {
      window.location.href =
        "index.html#" + arrayNav[navItems.indexOf(e.target)];
    } else {
      window.location.href = "#" + arrayNav[navItems.indexOf(e.target)];
    }
  })
);