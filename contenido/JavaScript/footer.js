// Cargar el contenido de footer.html en el contenedor
window.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footerContainer');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'footer.html', true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            footerContainer.innerHTML = xhr.responseText;
        }
    };

    xhr.send();
});