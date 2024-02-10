const bars = document.querySelector(".bars")
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".menuList")


bars.addEventListener("click", () => {
    menu.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", () => {
    menu.classList.remove("active")
    overlay.classList.remove("active")
})



const changeText = document.querySelector(".changeText")

const textArr = ["Sales", "General", "Administrative"]

let currentIndex = 0;

function updateText() {
    changeText.textContent = textArr[currentIndex];
    currentIndex = (currentIndex + 1) % textArr.length;
}

setInterval(updateText, 1500);
updateText();