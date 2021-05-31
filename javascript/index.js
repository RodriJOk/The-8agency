const boton = document.getElementById("btn")
const box = document.getElementById("box")
boton.addEventListener("click", ()=>{
    box.classList.add("isactive")

    console.log("Estas dentro")
})