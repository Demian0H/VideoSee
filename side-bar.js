let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");
const dropDown = document.querySelector(".drop-down")

// let menuIcon = document.querySelector(".menu-icon")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");    
    
}

dropDown.addEventListener("mouseenter", () => {
    menu.classList.remove("hidden")
})

menu.addEventListener("mouseleave", () => {
    menu.classList.add("hidden")
})
