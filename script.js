const intro = document.getElementById('intro-pkmn');
const audio = document.getElementById('audio-pkmn');
const icons = document.querySelectorAll(".next-icon");
const formulario = document.getElementById('form');
const volumeContainer = document.querySelector(".volume-container");
const volumeIcon = document.getElementById("volume-icon");
const volumeBar = document.querySelector(".volume-bar");
const volumeSelected = document.querySelector(".volume-selected");

let isDragging = false;

volumeContainer.hidden = true;
volumeIcon.hidden = false;
volumeBar.hidden = true;
intro.addEventListener('click', enterPage);

setInterval( () => {
    icons.forEach( (icon) => {
        if (icon.style.visibility == "hidden") {
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

volumeContainer.addEventListener("mouseenter", () => {
    volumeIcon.hidden = true;
    volumeBar.hidden = false;
    isDragging = false;
});

volumeContainer.addEventListener("mouseleave", () => {
    volumeIcon.hidden = false;
    volumeBar.hidden = true;
    isDragging = false;
});

volumeContainer.addEventListener("touchstart", () => {
    volumeIcon.hidden = true;
    volumeBar.hidden = false;
    isDragging = false;
});

volumeBar.addEventListener("mousedown", (event) => {
    isDragging = true;
    updateVolume(event);
});

window.addEventListener("mouseup", () => {
    isDragging = false;
});

window.addEventListener("mousemove", (event) => {
    if (isDragging) {
        updateVolume(event);
    }
});

function updateVolume(event) {
    const barRect = volumeBar.getBoundingClientRect();
    const newHeight = Math.max(0, Math.min(barRect.bottom - event.clientY, barRect.height));

    const volumePercentage = newHeight / barRect.height;
    volumeSelected.style.height = `${volumePercentage * 100}%`;
    audio.volume = volumePercentage;
}

function enterPage() {
    intro.removeEventListener('click', enterPage);
    intro.classList.add('transition')

    setTimeout(() => {
        intro.hidden = true;
        volumeContainer.hidden = false;

        audio.volume = 0.5;
        audio.play()
    }, 600);
}