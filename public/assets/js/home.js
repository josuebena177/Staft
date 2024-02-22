const lookingFor = document.querySelector(".lookingFor")
const toHire = document.querySelector(".toHire")
const hireType = document.querySelectorAll(".hireType")
const hireLevels = document.querySelectorAll(".hireLevels")
const hireSelects = document.querySelectorAll(".hireSelects")
const lookingText = document.querySelector(".lookingText")
const selectItemContainer = document.querySelector(".selectItemContainer")

const doneBtn1 = document.querySelector(".doneBtn1")

const hireSelectLabels = document.querySelectorAll(".hireSelects label")



lookingFor.addEventListener("click", (event) => {
    event.stopPropagation();
    toHire.classList.add("active")
})
hireType.forEach((item, i) => {
    item.addEventListener("click", (event) => {
        event.stopPropagation();
        hireLevels[i].classList.add("active")
    })
    const singleHireLevel = item.querySelector(".hireLevels")
    singleHireLevel?.querySelectorAll(".hireLevelItem").forEach((levItem, levInd) => {
        levItem.addEventListener("click", (event) => {
            event.stopPropagation();
            levItem.querySelector(".hireSelects")?.classList.add("active")
        })
    })
})

doneBtn1.addEventListener("click", () => {
    toHire.classList.remove("active")
    hireLevels.forEach(item => {
        item.classList.remove("active")
    })
    hireSelects.forEach(item => {
        item.classList.remove("active")
    })
})



let selectedItems = [];


doneBtn1.addEventListener("click", () => {
    hireSelectLabels.forEach(item => {
        const itemInp = item.querySelector("input")
        const itemText = item.querySelector("small").innerText
        const indexInSelectedItems = selectedItems.indexOf(itemText);
        console.log(itemInp.checked);
        if (itemInp.checked) {
            if (indexInSelectedItems === -1) {
                selectedItems.push(itemText);
            }
        } else {
            if (indexInSelectedItems !== -1) {
                selectedItems.splice(indexInSelectedItems, 1);
            }
        }
    })
    console.log(selectedItems);
    lookingText.innerHTML = `<p class="sm:text-lg xs:text-sm text-[10px] w-full block pr-2 truncate text-black">${selectedItems}</p>`

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

// hireSelectLabels.forEach(item => {
//     item.addEventListener("click", () => {
//         const itemText = item.querySelector("small").innerText;
//         const itemInp = item.querySelector("input");
//         hireSelectLabels.forEach(innerItem => {
//             const innerItemInp = innerItem.querySelector("input")
//             if (innerItemInp.checked) {
                
//             }
//         })
//     })
// })
// hireSelectLabels.forEach(item => {
//     item.addEventListener("click", () => {
//         const itemText = item.querySelector("small").innerText;
//         const itemInp = item.querySelector("input");

//         const indexInSelectedItems = selectedItems.indexOf(itemText);

//         if (itemInp.checked) {
//             if (indexInSelectedItems === -1) {
//                 selectedItems.push(itemText);
//             }
//         } else {
//             if (indexInSelectedItems !== -1) {
//                 selectedItems.splice(indexInSelectedItems, 1);
//             }
//         }

        
//         lookingText.innerHTML = `<p class="text-lg w-full block pr-2 truncate text-black">${selectedItems}</p>`

//         const selectedShow = selectedItems.map(val => {
//             return (
//                 `
//                 <li class="md:py-[8px] py-[5px] md:px-3 px-2 mt-3 border-[1px] border-deep-green rounded-[15px] md:text-sm text-[8px] text-deep-green md:mr-4 mr-2 flex items-center">
//                             ${val}
//                             <img src="assets/images/x-circle.svg" alt="" class="cursor-pointer ml-1.5">
//                 </li>
//                 `
//             )
//         }).join("")
//         selectItemContainer.innerHTML = selectedShow
//     });
// });