let flag = 0;
let nav = document.querySelector(".nav-over");
let btn = document.querySelector("#bt");
let n = document.querySelector(".navbar");
let show = () => {
  if (flag) {
    flag = 0;

    nav.classList.add("hhide");
    btn.style.scale = 0.9;
  } else {
    flag = 1;
    nav.classList.remove("hhide");
    btn.style.scale = 1.1;
  }
};
btn.addEventListener("click", show);
