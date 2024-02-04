const menuBtn = document.querySelector(".menubar i")
const cancel = document.querySelector(".fa-xmark") 
const navLinks = document.querySelector(".navlinks")

menuBtn.addEventListener("click",()=>{
    navLinks.classList.add("show")
    cancel.classList.add("cancel-icon-show")
})
cancel.addEventListener("click",()=>{
    navLinks.classList.remove("show")
    cancel.classList.remove("cancel-icon-show")
})
