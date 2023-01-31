let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
let crt = document.querySelector(".top");

window.onscroll = function () {
  this.scrollY >= 900
    ? crt.classList.add("top-show")
    : crt.classList.remove("top-show");
};
crt.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};