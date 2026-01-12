const btn = document.querySelector(".newe");
const btn2 = document.querySelector(".checker");
const myno = document.querySelector("#usernumber");
const meow =document.querySelector(".scoree");
const higha =document.querySelector(".highscore");
const btn0=document.querySelector(".buto")
let a = colo();
let scoro=20;
let main=0;

myno.addEventListener("keydown", function (e) {
    if (e.key === "Shift") {
        const val = Number(myno.value);
        a=val;
    }
});

btn.addEventListener('click', function () {
    a = colo();
    document.body.style.backgroundColor = 'black';
    scoro=20;
    meow.textContent=`${scoro}`

});

btn2.addEventListener('click', function () {
    const k = Number(myno.value);

    if (!k) {
        alert("Enter a number first!");
        return;
    }

    if (a === k) {
        document.body.style.backgroundColor = "green";
        alert("Congrats! you are getting good at guessing")
        if(scoro>main){
            main=scoro;
            higha.textContent=`${main}`
        }
        
    } else {
        document.body.style.backgroundColor = "red";
        if( k>a){
            alert("guess lower number");
            scoro--;
            meow.textContent=`${scoro}`
        }
        else{
            alert("guess higher number");
            scoro--;
            meow.textContent=`${scoro}`
        }
    }
});
  
function colo() {
    return Math.floor(Math.random() * 20) + 1;
}

btn0.addEventListener("click",function(){
    window.history.back();
})
