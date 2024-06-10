let menuIcon =document.querySelector(".menu-logo")
let sideBar =document.querySelector(".sidebar")
let container =document.querySelector(".container")

menuIcon.onclick =function(){
    sideBar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}