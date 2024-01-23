const btnMenu = document.getElementById("btnMenu");
const btnCloseMenu = document.getElementById("btnCloseMenu");
const btnX = document.getElementById("x");

btnMenu.addEventListener("click", openMenu);
btnX.addEventListener("click", closeMenu);

function openMenu(){
    btnMenu.classList.add("closed");
    btnCloseMenu.classList.remove("closed");
}

function closeMenu(){
    btnCloseMenu.classList.add("closed");
    btnMenu.classList.remove("closed");
}

