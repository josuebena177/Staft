const toHire = document.querySelector(".toHire")
const lookingFor = document.querySelector(".lookingFor")
const lookingText = document.querySelector(".lookingText")
const selectItemContainer = document.querySelector(".selectItemContainer")

const hireSelectLabels = document.querySelectorAll(".hireSelects label")



lookingFor.addEventListener("click", () => {
    console.log('hi');
    toHire.classList.toggle("active")
})



let selectedItems = [];

hireSelectLabels.forEach(item => {
    item.addEventListener("click", () => {
        const itemText = item.querySelector("small").innerText;
        const itemInp = item.querySelector("input");

        const indexInSelectedItems = selectedItems.indexOf(itemText);

        if (itemInp.checked) {
            if (indexInSelectedItems === -1) {
                selectedItems.push(itemText);
            }
        } else {
            if (indexInSelectedItems !== -1) {
                selectedItems.splice(indexInSelectedItems, 1);
            }
        }

        // console.log(selectedItems);
        lookingText.innerHTML = `<p class="text-lg w-full block pr-2 truncate text-black">${selectedItems}</p>`

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
    });
});