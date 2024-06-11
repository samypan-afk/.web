document.write('<p style="color: black; font-size: 20px; text-align: center;"><a href="https://www.youtube.coms"> YouTube, ENTRAA!!</a><br></p>');
document.write('<p style="color: black; font-size: 20px; text-align: center;"><a href="https://www.twitch.tv">Twitch, ENTRAA!!</a></p>');
document.write('<p style="color: black; font-size: 20px; text-align: center;"><a href="https://here.fm/non-chrome.html?roomId=">Here, ENTRAA!!</a></p>');
document.write('<p style="color: black; font-size: 20px; text-align: center;"><a href="https://www.instagram.com">Instagram, ENTRAA!!</a></p>');
document.write("DISFRUTAAAAAA!!")
// Obtener el elemento donde se mostrará el anuncio
const adContainer = document.getElementById('ad-container');

// Definir el mensaje del anuncio
const message = '¡Bienvenido a Cyber-attack! Visita sitios donde puedes ver videos o cualquier cosa que te guste!!';

// Crear un elemento de párrafo para mostrar el mensaje
const adText = document.createElement('p');
adText.textContent = message;

// Estilizar el mensaje del anuncio
adText.style.fontSize = '20px';
adText.style.fontWeight = 'bold';

// Agregar el mensaje al contenedor del anuncio
adContainer.appendChild(adText)

