const lookingFor = document.querySelector(".lookingFor")
const lookingFor2 = document.querySelector(".lookingFor2")
const toHire = document.querySelector(".toHire")
const toHire2 = document.querySelector(".toHire2")
const hireType = document.querySelectorAll(".hireType")
// const hireLevels = document.querySelectorAll(".hireLevels")
// const hireSelects = document.querySelectorAll(".hireSelects")
const lookingText = document.querySelector(".lookingText")
const lookingText2 = document.querySelector(".lookingText2")
const selectItemContainer = document.querySelector(".selectItemContainer")
const selectItemContainer2 = document.querySelector(".selectItemContainer2")
const lookingOverlay = document.querySelector(".lookingOverlay")
const lookingOverlay2 = document.querySelector(".lookingOverlay2")

const personBox = document.querySelectorAll(".personBox")






let selectedItems = [];
let selectedItems2 = [];


lookingFor.addEventListener("click", () => {
    toHire.classList.add("active")
    lookingOverlay.classList.add("active")
})
lookingFor2.addEventListener("click", () => {
    toHire2.classList.add("active")
    lookingOverlay2.classList.add("active")
})

toHire.querySelectorAll(".hireType").forEach(item => {
    item.addEventListener("click", () => {
        const findItemInd = selectedItems.indexOf(item.innerText)
        if (findItemInd === -1) {
            selectedItems.push(item.innerText)
        } else {
            selectedItems.splice(findItemInd, 1)
        }



        if (selectedItems.length > 0) {
            lookingText.innerHTML = `<p class="sm:text-lg xs:text-sm text-[10px] w-full block pr-2 truncate text-black">${selectedItems}</p>`
        } else {
            lookingText.innerHTML = `<span class="text-deep-black3 sm:text-lg xs:text-sm text-[10px] w-full block">I am looking to hire</span>`
        }

        const selectedShow = selectedItems.map(val => {
            return (
                `
            <li class="md:py-[8px] py-[5px] md:px-3 px-2 mt-3 border-[1px] border-deep-green rounded-[15px] md:text-sm text-[8px] text-deep-green md:mr-4 mr-2 flex items-center">
                    ${val}
                <img src="assets/images/x-circle.svg" alt="" class="cursor-pointer ml-1.5">
            </li>
                `
            )
        }).join("")
        selectItemContainer.innerHTML = selectedShow
    })
})

toHire2.querySelectorAll(".hireType").forEach(item => {
    item.addEventListener("click", () => {
        const findItemInd = selectedItems2.indexOf(item.innerText)
        if (findItemInd === -1) {
            selectedItems2.push(item.innerText)
        } else {
            selectedItems2.splice(findItemInd, 1)
        }



        if (selectedItems2.length > 0) {
            lookingText2.innerHTML = `<p class="sm:text-lg xs:text-sm text-[10px] w-full block pr-2 truncate text-black">${selectedItems2}</p>`
        } else {
            lookingText2.innerHTML = `<span class="text-deep-black3 sm:text-lg xs:text-sm text-[10px] w-full block">I am looking to hire</span>`
        }

        const selectedShow = selectedItems2.map(val => {
            return (
                `
            <li class="md:py-[8px] py-[5px] md:px-3 px-2 mt-3 border-[1px] border-deep-green rounded-[15px] md:text-sm text-[8px] text-deep-green md:mr-4 mr-2 flex items-center">
                    ${val}
                <img src="assets/images/x-circle.svg" alt="" class="cursor-pointer ml-1.5">
            </li>
                `
            )
        }).join("")
        selectItemContainer2.innerHTML = selectedShow
    })
})


lookingOverlay.addEventListener("click", () => {
    lookingOverlay.classList.remove("active")
    toHire.classList.remove("active")
})
lookingOverlay2.addEventListener("click", () => {
    lookingOverlay2.classList.remove("active")
    toHire2.classList.remove("active")
})











const seePeopleBtn = document.querySelector(".seePeopleBtn")
const getStaftBtn = document.querySelector(".getStaftBtn")
const requestOverflow = document.querySelector(".requestOverflow")
const hireFortInt = document.querySelector(".hireFortInt")
const closeModBtn = document.querySelector(".closeModBtn")




const seePeopleHandler = () => {
    requestOverflow.classList.add("active")
    hireFortInt.classList.add("active")
}
seePeopleBtn.addEventListener("click", seePeopleHandler)
getStaftBtn.addEventListener("click", seePeopleHandler)
personBox.forEach(item => {
    item.addEventListener("click", seePeopleHandler)
})

closeModBtn.addEventListener("click", () => {
    requestOverflow.classList.remove("active")
    hireFortInt.classList.remove("active")
})













const changeText = document.querySelector(".changeText")

const textArr = ["Sales", "Operations"]

let currentIndex = 0;

function updateText() {
    changeText.textContent = textArr[currentIndex];
    currentIndex = (currentIndex + 1) % textArr.length;
}

setInterval(updateText, 1500);
updateText();