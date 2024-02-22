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