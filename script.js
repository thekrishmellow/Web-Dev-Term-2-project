const btn = document.querySelector(".randomize");

if (btn) {
  btn.addEventListener("click", function () {
    const a = generate();
    console.log(a);

    const boxes = document.querySelectorAll(".grandbox .b");
    boxes.forEach((el, idx) => {
      if (idx === a - 1) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  });
}

function generate() {
  return Math.floor(Math.random() * 4 + 1);
}
