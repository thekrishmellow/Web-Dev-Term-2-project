const btn = document.querySelector(".randomize");
const game1 =document.querySelector(".reaction-game");
const game2 =document.querySelector(".guessno-game");
const game3 =document.querySelector(".target-game");
const game4 =document.querySelector(".type-game");

game1.addEventListener("click",function(){
  window.location.href ="reaction.html";
})
game2.addEventListener("click",function(){
  window.location.href ="guess.html";
})
game3.addEventListener("click",function(){
  window.location.href ="point.html";
})
game4.addEventListener("click",function(){
  window.location.href ="type-test.html";
})

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
