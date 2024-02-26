const reqInterview = document.querySelector(".reqInterview")
const requestOverflow = document.querySelector(".requestOverflow")
const requestInt = document.querySelector(".requestInt")
const closeModBtn = document.querySelector(".closeModBtn")



reqInterview.addEventListener("click", () => {
    requestOverflow.classList.add("active")
    requestInt.classList.add("active")
})
closeModBtn.addEventListener("click", () => {
    requestOverflow.classList.remove("active")
    requestInt.classList.remove("active")
})






const lookingFor = document.querySelector(".lookingFor")
const lookingFor2 = document.querySelector(".lookingFor2")
const lookingFor3 = document.querySelector(".lookingFor3")
const lookingFor4 = document.querySelector(".lookingFor4")
const lookingFor5 = document.querySelector(".lookingFor5")
const modLookingFor = document.querySelector(".modLookingFor")
const modLookingFor2 = document.querySelector(".modLookingFor2")
const modLookingFor3 = document.querySelector(".modLookingFor3")
const modLookingFor4 = document.querySelector(".modLookingFor4")
const modLookingFor5 = document.querySelector(".modLookingFor5")

const lookingOverlay = document.querySelector(".lookingOverlay")
const modLookingOverlay = document.querySelector(".modLookingOverlay")

const toHire = document.querySelector(".toHire")
const toHire2 = document.querySelector(".toHire2")
const toHire3 = document.querySelector(".toHire3")
const toHire4 = document.querySelector(".toHire4")
const toHire5 = document.querySelector(".toHire5")
const modToHire = document.querySelector(".modToHire")
const modToHire2 = document.querySelector(".modToHire2")
const modToHire3 = document.querySelector(".modToHire3")
const modToHire4 = document.querySelector(".modToHire4")
const modToHire5 = document.querySelector(".modToHire5")

const lookingText = document.querySelectorAll(".lookingText")


const lookingForArr = [lookingFor, lookingFor2, lookingFor3, lookingFor4, lookingFor5]
const modLookingForArr = [modLookingFor, modLookingFor2, modLookingFor3, modLookingFor4, modLookingFor5]
const toHireArr = [toHire, toHire2, toHire3, toHire4, toHire5]
const modToHireArr = [modToHire, modToHire2, modToHire3, modToHire4, modToHire5]
const placeholderArr = ["Roles", "Industry", "Year Graduated", "Compensation", "Radius"]
const modPlaceholderArr = ["Job Position", "Job Type", "Compensation", "Number of hires", "Job Setting"]



let selectedItems = [];

lookingForArr.forEach((item, i) => {
    item.addEventListener("click", () => {
        toHireArr.forEach(hireItem => {
            hireItem.classList.remove("active")
        })
        toHireArr[i].classList.add("active")
        lookingOverlay.classList.add("active")
    })
})
toHireArr.forEach((hireItem, i) => {
    let singleSelectedItem = []
    hireItem.querySelectorAll(".hireType").forEach(typeItem => {
        typeItem.addEventListener("click", () => {
            const findItemInd = singleSelectedItem.indexOf(typeItem.innerText)
            if (i === 0) {
                if (findItemInd === -1) {
                    singleSelectedItem.push(typeItem.innerText)
                } else {
                    singleSelectedItem.splice(findItemInd, 1)
                }
            } else {
                singleSelectedItem = typeItem.innerText
            }

            console.log(singleSelectedItem);

            if (singleSelectedItem.length > 0) {
                lookingText[i].innerHTML = `<p class="stext-deep-black4 sm:text-lg xs:text-sm text-xs w-full block pr-1 truncate text-black">${singleSelectedItem}</p>`
            } else {
                lookingText[i].innerHTML = `<span class="${i % 2 ? "text-deep-black4" : "text-deep-black3"} sm:text-lg xs:text-sm text-xs w-full block">${placeholderArr[i]}</span>`
            }
        })
    })
})
lookingOverlay.addEventListener("click", () => {
    toHireArr.forEach(item => {
        item.classList.remove("active")
    })
    lookingOverlay.classList.remove("active")
})





let modSelectedItems = []

modLookingForArr.forEach((item, i) => {
    item.addEventListener("click", () => {
        modToHireArr.forEach(hireItem => {
            hireItem.classList.remove("active")
        })
        modToHireArr[i].classList.add("active")
        modLookingOverlay.classList.add("active")
    })
})
modToHireArr.forEach((hireItem, i) => {
    let singleSelectedItem = []
    hireItem.querySelectorAll(".hireType").forEach(typeItem => {
        typeItem.addEventListener("click", () => {
            // const findItemInd = singleSelectedItem.indexOf(typeItem.innerText)

            singleSelectedItem = typeItem.innerText

            console.log(singleSelectedItem);

            if (singleSelectedItem.length > 0) {
                lookingText[lookingForArr.length + i].innerHTML = `<p class="stext-deep-black4 sm:text-sm xs:text-sm text-xs w-full block pr-1 truncate text-black">${singleSelectedItem}</p>`
            } else {
                lookingText[lookingForArr.length + i].innerHTML = `<span class="text-deep-black4 sm:text-sm xs:text-sm text-xs w-full block">${modPlaceholderArr[i]}</span>`
            }
        })
    })
})
modLookingOverlay.addEventListener("click", () => {
    modToHireArr.forEach(item => {
        item.classList.remove("active")
    })
    modLookingOverlay.classList.remove("active")
})