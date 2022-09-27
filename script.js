/* Botton back to top  */

const backToTopButton = document.querySelector(".button-top");

function backToTop() {
  if (window.scrollY >= 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}
window.addEventListener("scroll", function () {
  backToTop();
});


