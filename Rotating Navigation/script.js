const menu=document.querySelector("#menu");
const body=document.querySelector("body");
const container=document.querySelector("#container");
const menuImage=document.querySelector("#menu-image");
const content=document.querySelector("#content");
const menus=document.querySelector(".menus");
const closeImage=document.querySelector("#close-image");
function openMenu()
{
    container.classList.add("rotation");
    // menu.classList.add("menu-rotation");
    menuImage.classList.add("menu-rotation");
    // content.classList.add("rotation");
    console.log(container);
    menu.classList.remove("sticky-menu");
    // menus.classList.add("menu-options-return");
    menus.classList.remove("menus");
    menus.classList.add("opened-menus");
    closeImage.classList.add("appear-close");
    console.log(menus);
}
function closeMenu(){
    container.classList.remove("rotation");
    container.classList.add("rerotation");

    menu.classList.remove("opened-menus");
    menu.classList.add("menu-rerotation");
    menu.classList.add("closed-menus");
    menuImage.classList.add("appear-menu");
    closeImage.classList.remove("appear-close");
    closeImage.classList.add("disappear-close");
}
if(menu)
{
    console.log(menus);
    menu.addEventListener("click",openMenu);
}
if(closeImage){
    console.log(closeImage);
    closeImage.addEventListener("click",closeMenu);
}