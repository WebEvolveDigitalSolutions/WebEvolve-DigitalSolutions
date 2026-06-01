// FORMULARIO

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || message === ""){

            alert("Por favor completa todos los campos.");
            return;

        }

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){

            alert("Ingresa un correo válido.");
            return;

        }

        alert("Mensaje enviado correctamente.");

        form.reset();

    });

}

// SCROLL REVEAL

const reveals =
document.querySelectorAll(
".card, .benefit, .project, .plan, .testimonial"
);

reveals.forEach(item=>{
    item.classList.add("reveal");
});

window.addEventListener("scroll", revealElements);

function revealElements(){

    const trigger =
    window.innerHeight - 100;

    reveals.forEach(el=>{

        const top =
        el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("active");

        }

    });

}

revealElements();

// NAVBAR SHADOW

window.addEventListener("scroll", ()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.3)";

    }else{

        navbar.style.boxShadow =
        "none";

    }

});