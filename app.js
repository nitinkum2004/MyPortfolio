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

document.querySelectorAll(".anime").forEach((el) => {
  let endValue = el.getAttribute("data-end-value");
  let startValue = el.getAttribute("data-increment");
  let durationValue = el.getAttribute("data-duration");

  if (endValue) numberAnimation(el, endValue, startValue, durationValue);
});

function numberAnimation(el, endValue, incrementor, duration) {
  anime({
    targets: el,
    textContent: endValue,
    round: incrementor ? 1 / incrementor : 1 / 5,
    easing: "easeInOutQuad",
    duration: duration ? duration : 4000,
  });
}
