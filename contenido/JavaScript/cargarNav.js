// Cargar el contenido de nav.html en el contenedor
window.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('navContainer');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'nav.html', true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            navContainer.innerHTML = xhr.responseText;
        }
    };

    xhr.send();
});