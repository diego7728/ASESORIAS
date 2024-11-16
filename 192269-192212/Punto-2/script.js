
const numHijosInput = document.getElementById('numHijos');
const hijosContenedor = document.getElementById('hijosContenedor');


numHijosInput.addEventListener('input', function() {
    const numHijos = parseInt(numHijosInput.value);

    
    hijosContenedor.innerHTML = '';

    for (let i = 0; i < numHijos; i++) {
        const hijoDiv = document.createElement('div');
        hijoDiv.classList.add('hijoInput');

        const labelNombre = document.createElement('label');
        labelNombre.textContent = `Nombre del hijo ${i + 1}:`;
        const inputNombre = document.createElement('input');
        inputNombre.type = 'text';
        inputNombre.placeholder = `Nombre del hijo ${i + 1}`;

        const labelEdad = document.createElement('label');
        labelEdad.textContent = `Edad del hijo ${i + 1}:`;
        const inputEdad = document.createElement('input');
        inputEdad.type = 'number';
        inputEdad.placeholder = `Edad del hijo ${i + 1}`;

        
        hijoDiv.appendChild(labelNombre);
        hijoDiv.appendChild(inputNombre);
        hijoDiv.appendChild(labelEdad);
        hijoDiv.appendChild(inputEdad);

        hijosContenedor.appendChild(hijoDiv);
    }
});


const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); 

    const hijosData = [];
    const hijoInputs = document.querySelectorAll('.hijoInput');

    hijoInputs.forEach(hijoDiv => {
        const nombre = hijoDiv.querySelector('input[type="text"]').value;
        const edad = hijoDiv.querySelector('input[type="number"]').value;

        if (nombre && edad) {
            hijosData.push({ nombre, edad });
        }
    });

    console.log('Datos de los hijos:', hijosData);
    alert('Datos enviados correctamente!');
});
