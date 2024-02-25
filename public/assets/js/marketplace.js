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
const lookingOverlay = document.querySelector(".lookingOverlay")
const toHire = document.querySelector(".toHire")
const toHire2 = document.querySelector(".toHire2")
const toHire3 = document.querySelector(".toHire3")
const toHire4 = document.querySelector(".toHire4")
const toHire5 = document.querySelector(".toHire5")
const lookingText = document.querySelectorAll(".lookingText")


const lookingForArr = [lookingFor, lookingFor2, lookingFor3, lookingFor4, lookingFor5]
const toHireArr = [toHire, toHire2, toHire3, toHire4, toHire5]
const placeholderArr = ["Roles", "Industry", "Year Graduated", "Compensation", "Radius"]



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