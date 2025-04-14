const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
function completar() {
    const nombre = document.getElementById("nombre").value;
    const contrasena = document.getElementById("contrasena").value;
    console.log("Completar", nombre, contrasena)
    localStorage.setItem("token", nombre +"-"+ contrasena)
    window.location.reload()
    // modal.hide() = esconder el  modal 
}

document.getElementById("formData").addEventListener("submit", function(e){
    e.preventDefault() // PARA NO AUTO RECARGAR LA PAG 
   
    modal.show();

})
