
class AyudasSpan extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                span {
                    display: inline-block;
                    border-radius: 8px;
                    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
                    color: rgb(48, 95, 184);
                    font-weight: bold;
                    font-family: Arial, Helvetica, sans-serif;
                    padding: 5px 10px;
                    font-size: 1.0em;
                    margin: 0 0 20px;
                }
            </style>
            <span><slot></slot></span>
        `;
    }
}


customElements.define('ayudas-span', AyudasSpan);



class Diego192269MostrarCaja extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #3595a7;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }
                button:hover {
                    background-color: #0d4e5a;
                }
            </style>
            <button>DiegoRodriguez192269 - Mostrar Caja de Texto</button>
        `;

      
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            const inputContainer = document.querySelector('diego-192269-ocultar-caja').shadowRoot.querySelector('#inputContainer');
            inputContainer.classList.remove('hidden');
        });
    }
}


customElements.define('diego-192269-mostrar-caja', Diego192269MostrarCaja);



class Diego192269OcultarCaja extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #1c166b;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }
                button:hover {
                    background-color: #3629eb;
                }

                /* Estilo para ocultar la caja de texto */
                .hidden {
                    display: none;
                }
            </style>
            <button>Ocultar Caja de Texto</button>
            <div id="inputContainer" class="hidden">
                <input type="text" placeholder="Escribe algo aquí..." style="margin-top: 20px; padding: 8px;">
            </div>
        `;

       
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            const inputContainer = this.shadowRoot.querySelector('#inputContainer');
            inputContainer.classList.add('hidden');
        });
    }
}


customElements.define('diego-192269-ocultar-caja', Diego192269OcultarCaja);
