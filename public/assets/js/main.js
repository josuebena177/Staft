const bars = document.querySelector(".bars")
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".menuList")


bars.addEventListener("click", ()=> {
    menu.classList.add("active")
    overlay.classList.add("active")
})
overlay.addEventListener("click", ()=> {
    menu.classList.remove("active")
    overlay.classList.remove("active")
})