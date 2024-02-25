const bars = document.querySelector(".bars")
const closeHeader = document.querySelector(".closeHeader")
const menu = document.querySelector(".menuList")

const footerMenuItems = document.querySelectorAll(".footerMenuItem")


bars.addEventListener("click", () => {
    menu.classList.add("active")
})
closeHeader.addEventListener("click", () => {
    menu.classList.remove("active")
})






footerMenuItems.forEach((item, i) => {
    const itemHeading = item.querySelector("h3")
    // const itemMenu = item.querySelector("ul")

    itemHeading.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active")
        } else {
            item.classList.add("active")
        }
    })
})