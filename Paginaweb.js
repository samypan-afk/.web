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
adContainer.appendChild(adText);

// Crear un nuevo elemento de enlace
const link = document.createElement('a');

// Asignar la URL al atributo href
link.href = 'file:///C:/Users/Samantha/Documents/SAMANTHA%20UNIDAD%203/PAGINAWEB/PAGINA.html';

// Asignar el texto del enlace
link.textContent = 'Visita Cyber-attack.com!!🔊';

// Estilizar el enlace (opcional)
link.style.color = 'blue';
link.style.textDecoration = 'none';

// Obtener el contenedor donde se mostrará el enlace
const linkContainer = document.getElementById('link-container');

// Agregar el enlace al contenedor
linkContainer.appendChild(link);