const enviarBtn = document.getElementById('submit-btn')


enviarBtn.addEventListener('click', () => {

    let mainPage = 'pages/home.html'

    const edad = document.getElementById('edad')
    
    const edadUsuario = parseInt(edad.value)

    if (edadUsuario >= 18) {
        window.location.href = mainPage
    } else {
        alert('No eres mayor de edad')
    }
})