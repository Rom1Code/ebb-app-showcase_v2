const btn_wrapper = document.getElementById("btn-wrapper");
const modal = document.getElementById("modal")
const android_btn = document.getElementById("android-btn");
const ios_btn = document.getElementById("ios-btn");
const qr = document.getElementById("qr");
let isVisible = false


btn_wrapper.addEventListener("click", () => {
    if(isVisible){
        modal.style.visibility = "hidden"
        isVisible=false
    }
    else {
        modal.style.visibility = "visible"
        isVisible=true
    }
})

android_btn.addEventListener("click", () => {
    console.log('click')
    android_btn.classList.add('active')
    ios_btn.classList.remove('active')
    qr.style.backgroundImage = "url('./android_QR.jpg')"
})

ios_btn.addEventListener("click", () => {
    console.log('click')
    ios_btn.classList.add('active')
    android_btn.classList.remove('active')
    qr.style.backgroundImage = "url('./apple_QR.jpg')"
})

var container = document.getElementById("container")
var container2 = document.getElementById("container2")

var page = document.getElementById("page")
var circle = document.getElementById("circle")
var circleX = 0;
var circleY = 0;
var mouseX = 0;
var mouseY = 0;

// container2.addEventListener("mouseenter", () => {
//     console.log("contianrer2")
//     circle.style.backgroundColor = "#0bb049"
// })

// container2.addEventListener("mouseleave", () => {
//     console.log("contianrer2")
//     circle.style.backgroundColor = "white"
// })

page.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    });
function lerp (start, end, amt){
return (1-amt)*start+amt*end
} 

setInterval (move,1000/60)

function move(){
circleX = lerp (circleX, mouseX, 0.2);
circleY = lerp (circleY, mouseY, 0.2);
circle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
}
