// Initialize EmailJS with your Public Key
emailjs.init("9nSevn5_Fxpy6B3Zp");

// Get DOM elements for the checkbox, label, and input field of the company name
const check = document.getElementById("checkb2");
const companyLabel = document.getElementById("cn");
const companyInput = document.getElementById("nombreCompania");

// Listen for changes on the checkbox to show or hide the company fields
check.addEventListener("change", function(){

    if (check.checked){
        companyLabel.style.display = "block"
        companyInput.style.display = "block"
    }
    else{
        companyLabel.style.display = "none"
        companyInput.style.display = "none"
        

    }

});

// --- SMOOTH SCROLL LOGIC ---
// Get DOM elements for the call-to-action button and the target quotation section
const click = document.getElementById("button_call");
const section = document.getElementById("cotizacion");

click.addEventListener("click", function(){
    section.scrollIntoView({ behavior: "smooth" });

});
// --- SMOOTH SCROLL WHEN ARRIVING FROM ANOTHER PAGE ---
// This handles clicks like <a href="main.html#cotizacion"> coming from servicios.html.
// Without this, the browser jumps straight to #cotizacion instantly on page load,
// before we ever get a chance to animate it.

// --- SMOOTH SCROLL AL LLEGAR DESDE OTRA PÁGINA ---
window.addEventListener("load", function () {

    // Revisamos si la bandera fue guardada por servicios.html
    if (sessionStorage.getItem("scrollToCotizacion") === "true") {

        // La borramos de inmediato para que no se dispare de nuevo
        // si el usuario recarga la página o navega otra vez a main.html
        sessionStorage.removeItem("scrollToCotizacion");

        // Como ya no hay hash en la URL, el navegador NUNCA salta solo.
        // Nosotros controlamos el scroll al 100%.
        section.scrollIntoView({ behavior: "smooth" });
    }

});

// --- FORM VALIDATION AND SUBMISSION LOGIC ---
// Get DOM element for the quotation form
const form = document.getElementById("cz");
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nC = document.getElementById("nombreCompleto");
    const tel = document.getElementById("telefono");
    const srv = document.getElementById("services");
    const des = document.getElementById("descripcion");
    const cons = document.getElementById("concent");
    const email = document.getElementById("email");
    const nCo = document.getElementById("nombreCompania");



    if (nC.value === ""){
        alert("thisbfieldnmust be filled")
        return;
    } 
    else if (tel.value === ""){
        alert("tel must be fill")
        return;
    }
    else if (srv.value === ""){
        alert("service must be fill")
        return;
    }
    else if (des.value === ""){
        alert("descripcion must be fill")
        return;
    }else if (email.value === ""){
        alert("email must be fill")
        return;
    }
    else if (cons.checked === false){
        alert("concent mus be check must be fill")
        return;
    }
        emailjs.send("service_o0e6egl","template_oawdohp",{
            nombreCompleto: nC.value,
            nombreCompania: nCo.value,
            telefono: tel.value,
            email: email.value,
            services: srv.value,
            descripcion: des.value
        }).then(function() {
            alert("Cotización enviada exitosamente!");
        }).catch(function(error) {
            alert("Algo salió mal: " + error);
});


});
// smooth scroll for solicitar cotizacion 

const imagenes = document.querySelectorAll('.slider-img');
let indexActual = 0;

setInterval(() => {
    // Quita la clase activa a la foto actual
    imagenes[indexActual].classList.remove('active');
    
    // Pasa a la siguiente foto (y vuelve a 0 si llega al final)
    indexActual = (indexActual + 1) % imagenes.length;
    
    // Añade la clase activa a la nueva foto
    imagenes[indexActual].classList.add('active');
}, 4000); // 4000 milisegundos = 4 segundos por foto


