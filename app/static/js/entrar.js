// Valida formulario de entrada
const formulario= document.getElementById("entrar");
const email= document.getElementById("email");
const password= document.getElementById("password");

formulario.addEventListener("submit", (evento) => {
    limpiarErrores(formulario);
    let hayErrores= false;
    if (!email.value.trim().includes("@")){
        mostrarError(email, "El email debe contener un arroba");
        hayErrores= true;
    }
    if (password.value.trim() === ""){
        mostrarError(password, "La contraseña esta vacía")
        hayErrores= true;
    }
    if (hayErrores){
        evento.preventDefault();
    }
});