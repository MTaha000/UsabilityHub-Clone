const menuBtn = document.querySelector(".menubar i")
const cancel = document.querySelector(".fa-xmark")
const navLinks = document.querySelector(".navlinks")

menuBtn.addEventListener("click", () => {
    navLinks.classList.add("show")
    cancel.classList.add("cancel-icon-show")
})
cancel.addEventListener("click", () => {
    navLinks.classList.remove("show")
    cancel.classList.remove("cancel-icon-show")
})

// Add Scroll Animation

let sections = document.querySelectorAll(".section")

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
       if(top >= offset && top < offset + height){
        sec.classList.add("show-animate")
       }else{
        if(top < offset + height - 200){
            sec.classList.remove("show-animate")
        }
       }
    })
}