const btnRegistro = document.getElementById('btnRegistro')

btnRegistro.addEventListener('click', () => {
    const fname = document.getElementById('fname').value || null
    const email = document.getElementById('email').value || null
    const phone = document.getElementById('phone').value || null
    const job = document.getElementById('job').value || null
    const pass = document.getElementById('pass').value || null
    const repass = document.getElementById('repass').value || null


    if( fname === null || email === null || phone === null || job === null || pass === null || repass === null){
        alert ('Faltan algunos datos')
    }else{
        if( pass !== repass){
            alert('Passwords no coinciden')
        }else{
            sendData('/signup', {
                fname,
                email,
                phone,
                jpb,
                pass
            })
        }
    }
})