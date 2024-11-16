function BotonExterno() {
    const paginaExternna = () => {
        window.location.href = 'https://ufpso.edu.co/';  
    };

    return (
        <div>
            <button onClick={paginaExternna}>
                Ir a la página externa
            </button>
        </div>
    );
}

ReactDOM.render(
    <BotonExterno />,
    document.getElementById('root')
);