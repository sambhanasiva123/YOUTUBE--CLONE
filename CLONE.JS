var menuIcon=document.querySelector(".img-menu")
var sideBar=document.querySelector(".saidbar")
var container=document.querySelector(".container")

menuIcon.onclick=function(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
    
}