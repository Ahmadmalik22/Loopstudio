import './style.css'

let btn=document.querySelector("#menu_btn")
let menu=document.querySelector("#menu")
btn.addEventListener("click",()=>{
    btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
})