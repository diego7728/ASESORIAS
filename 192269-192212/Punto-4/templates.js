const template = document.querySelector('#card-template');
const container = document.querySelector('#card-container');

function agregarCard(titulo, imagen, textos, footer) {
  const tarjeta = template.content.cloneNode(true);

  tarjeta.querySelector('.card-title').textContent = titulo; 
  tarjeta.querySelector('img').src = imagen; 
  const textContainer = tarjeta.querySelector('.card-body div'); 
  textContainer.innerHTML = textos.map(texto => `<p>${texto}</p>`).join('');
  tarjeta.querySelector('.card-footer p').textContent = footer; 


  container.appendChild(tarjeta);
}
agregarCard(
  'Título',
  'https://1000marcas.net/wp-content/uploads/2020/01/Pepsi-Logo-tumb-150x150.png',
  ['* Texto', '* Texto', '* Texto','* Texto'],
  'El footer o pie de pagina'
);
