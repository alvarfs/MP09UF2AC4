const intro = document.getElementById('intro-pkmn');
const audio = document.getElementById('audio-pkmn');
const icons = document.querySelectorAll(".next-icon");
const formulario = document.getElementById('form');

intro.addEventListener('click', enterPage);

setInterval( () => {
    icons.forEach( (icon) => {
        if (icon.style.visibility === "hidden") {
            icon.style.visibility = "visible";
        } else {
            icon.style.visibility = "hidden";
        }
    });
}, 200);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    Swal.fire({
        title: 'Mensaje Enviado',
        text: 'Tu mensaje ha sido recibido. Nos pondremos en contacto contigo!',
        icon: 'success',
        confirmButtonText: 'OK!'
    });
});

function enterPage() {
    intro.removeEventListener('click', enterPage);
    intro.classList.add('transition')

    setTimeout(() => {
        intro.hidden = true;

        audio.volume = 0.5;
        audio.play()
    }, 600);
}