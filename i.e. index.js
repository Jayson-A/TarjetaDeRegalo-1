function mostrar2() {
    document.getElementById('container')
    .style.display = 'block';
} 

function ocultar1() {
    document.getElementById('body')
    .style.display = 'none';
} 

function mostrar1() {
    document.getElementById('body')
    .style.display = 'block';
}

function ocultar2() {
    document.getElementById('container')
    .style.display = 'none';
}

function mostrar3() {
    document.getElementById('Ilustracion3')
    .style.display = 'block';
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    const inputValue = document.getElementById('verificacion').value; 
    const errorMessage = document.querySelector('.error-message'); 
    if(!inputValue) { 
        errorMessage.classList.add('active'); 
    }
    else {
        const paragraph = document.getElementById('parrafo3'); 
        paragraph.innerText = `Tarjeta enviada a ${inputValue}!`; 
        ocultar2();
        mostrar3(); 
    }
})
