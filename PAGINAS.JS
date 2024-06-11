
document.write('<p style="color: black; font-size: 20px; text-align: center;"><a href="https://www.1001juegos.com"> 1001Juegos, ENTRAA!!</a><br></p>');
document.write('<p style="color: black; font-size: 20px; text-align: center;"><a href="https://poki.com/es">Poki, ENTRAA!!</a></p>');
document.write('<p style="color: black; font-size: 20px; text-align: center;"><a href="https://www.juegos.com">Juegos, ENTRAA!!</a></p>');
document.write('<p style="color: black; font-size: 20px; text-align: center;"><a href="https://www.friv.com/z/play/juegos.html">Juegos Friv, ENTRAA!!</a></p>');
document.write("DISFRUTAAAAAA!!")
// Obtener el elemento donde se mostrará el anuncio
const adContainer = document.getElementById('ad-container');

// Definir el mensaje del anuncio
const message = '¡Bienvenido a Cyber-attack! Conéctate y disfruta de nuestros servicios de internet de alta velocidad.';

// Crear un elemento de párrafo para mostrar el mensaje
const adText = document.createElement('p');
adText.textContent = message;

// Estilizar el mensaje del anuncio
adText.style.fontSize = '20px';
adText.style.fontWeight = 'bold';

// Agregar el mensaje al contenedor del anuncio
adContainer.appendChild(adText)

