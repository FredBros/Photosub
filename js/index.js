//
//
// CAROUSEL
// from Splide
//

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    cover: true,
    height: "100vh",
  }).mount();
});
//
// In & Out Articles & Form effect
// (index page)
//
const articles = document.querySelectorAll(".index-section article");
const form = document.querySelector("form");
const footer = document.querySelector("footer");
//
// Test resize Trigger
//
window.addEventListener("resize", resetArticleTransformForSmartphone);
function resetArticleTransformForSmartphone() {
  if (window.innerWidth < 768) {
    // Smartphone mode
    //(Si on réduit la fenetre en mode Smartphone portrait, on reset les animations Transform.)
    articles.forEach((e) => (e.style.transform = "none"));
    form.style.transform = "none";

  } else {
    // Large screen Mode
    articles.forEach((e) => checkArticlePosition(e));
  }
}

// Test Scoll Trigger
// Article & Form in out
window.addEventListener("scroll", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    checkFormPosition();
    articles.forEach((e) => checkArticlePosition(e));
  }
});

//Test Onload Trigger :
// Article & Form in out
document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    checkFormPosition();
    articles.forEach((e) => checkArticlePosition(e));
  }
});

//
//  In & Out Article effect
//
function checkArticlePosition(article) {
  let fromTop = article.getBoundingClientRect().top;
  let hWindow = window.innerHeight;
  let hPercent = Math.floor((fromTop / hWindow) * 100);
  if (hPercent < 80 && hPercent > 20) {
    articleIn(article);
  } else {
    articleOut(article);
  }
}
function articleIn(article) {
  article.classList.contains("article-right")
    ? (article.style.transform = "translate(-100%, -50%)")
    : (article.style.transform = "translate(100%, -50%)");
}
function articleOut(article) {
  article.style.transform = "translate(0, -50%)";
}

//
// In & Out Form effect
//
function checkFormPosition() {  
  let fromTop = footer.getBoundingClientRect().top;
  let hWindow = window.innerHeight;
  let hPercent = Math.floor((fromTop / hWindow) * 100);
  if (hPercent < 95) {
    form.style.transform = "translate(0, 0)";
  } else {
    form.style.transform = "translate(0, 100%)";
  }
}

